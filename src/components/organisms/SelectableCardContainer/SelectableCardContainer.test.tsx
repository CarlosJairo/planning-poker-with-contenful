import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import SelectableCardContainer from "./SelectableCardContainer";
import "@testing-library/jest-dom";


// Configura el mock store sin thunk
const mockStore = configureMockStore();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: (selector: any) =>
    selector({
      user: { rolCurrentUser: ["player"] },
      game: {
        poolCards: [
          { id: "1", str: "1", value: 1 },
          { id: "2", str: "2", value: 2 },
        ],
      },
      content: {
        content: {
          thereAreNotCards: "No hay cartas",
          chooseACard: "Elige una carta",
        }
      }
    }),
}));

describe("SelectableCardContainer", () => {
  let store: any;

  beforeEach(() => {
    store = mockStore({
      user: { rolCurrentUser: ["player"], id: "123" },
      game: {
        poolCards: [
          { id: "1", str: "1", value: 1 },
          { id: "2", str: "2", value: 2 },
        ],
      }
    });
  });

  test("should render SelectableCardContainer and display cards", () => {
    render(
      <Provider store={store}>
        <SelectableCardContainer poolCards={store.getState().game.poolCards} />
      </Provider>
    );

    // Verifica que el título y las cartas se muestran
    expect(screen.getByText(/Elige una carta/i)).toBeInTheDocument();
    expect(screen.getByText(/1/i)).toBeInTheDocument();
    expect(screen.getByText(/2/i)).toBeInTheDocument();
  });



  test("should render 'No hay cartas' message when no cards are available", () => {
    store = mockStore({
      user: { rolCurrentUser: ["player"], id: "123" },
      game: { poolCards: [] },
    });

    render(
      <Provider store={store}>
        <SelectableCardContainer poolCards={store.getState().game.poolCards} />
      </Provider>
    );

    // Verifica el mensaje cuando no hay cartas
    expect(screen.getByText(/No hay cartas/i)).toBeInTheDocument();
  });
});
