import { fireEvent, render } from "@testing-library/react-native";
import HomeScreen from "../index";
import useNewsSearch from "@hooks/useNewsSearch";

jest.mock("@hooks/useNewsSearch");

describe("HomeScreen", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("El componente muestra el skeleton cuando está cargando", () => {
    useNewsSearch.mockReturnValue({
      articles: [],
      loading: true,
      error: null,
      query: "",
      setQuery: jest.fn(),
    });

    const { getByTestId, queryByText } = render(<HomeScreen />);

    expect(getByTestId("article-skeleton")).toBeTruthy();
    expect(queryByText("Animado: Primera nota")).toBeNull();
  });

  test("El componente renderiza artículos cuando termina de cargar", () => {
    useNewsSearch.mockReturnValue({
      articles: [
        { id: "1", title: "Primera nota" },
        { id: "2", title: "Segunda nota" },
      ],
      loading: false,
      error: null,
      query: "",
      setQuery: jest.fn(),
    });

    const { getByText } = render(<HomeScreen />);

    getByText("Primera nota");
    getByText("Segunda nota");
  });

  test("El componente maneja error y actualiza búsqueda al modificar input", () => {
    const setQuery = jest.fn();

    useNewsSearch.mockReturnValue({
      articles: [],
      loading: false,
      error: "Sin resultados",
      query: "",
      setQuery,
    });

    const { getByText, getByPlaceholderText } = render(<HomeScreen />);

    getByText("Sin resultados");

    const input = getByPlaceholderText("Buscar noticias");

    fireEvent.changeText(input, "tecnologia");
    expect(input.props.value).toBe("tecnologia");
  });
});
