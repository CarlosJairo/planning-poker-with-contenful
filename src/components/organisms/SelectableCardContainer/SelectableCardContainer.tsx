import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { everyoneVoted, selectCard } from "../../../reducers/game/gameSlice";
import { voteCard } from "../../../reducers/user/userSlice";
import { RootState } from "../../../app/store";
import Card from "../../atoms/Card/Card";
import SelectPoolCards from "../../molecules/SelectPoolCards/SelectPoolCards";
import "./SelectableCardContainer.scss";

interface CardType {
  id: string;
  str: string;
  value: number;
}

interface SelectableCardContainerProps {
  poolCards: CardType[];
}

const SelectableCardContainer: React.FC<SelectableCardContainerProps> = ({
  poolCards,
}) => {
  const [disabledCards, setDisabledCards] = useState(false);
  const { rolCurrentUser, id } = useSelector((state: RootState) => state.user);

  const dispatch = useDispatch();
  const isViwer = rolCurrentUser.includes("viwer");
  console.log(isViwer);

  const sendCard = (card: CardType) => {
    dispatch(selectCard({ card, id }));
    dispatch(voteCard(card));
    dispatch(everyoneVoted());

    setDisabledCards(true);
  };

  return (
    <section
      className={`o-selectable-cards ${isViwer && "o-selectable-cards--none"} `}
      data-testid="selectable-card-container"
    >
      <div className="o-selectable-cards__title-select">
        <h6>Elige una carta 👇</h6>
        <SelectPoolCards />
      </div>
      <div
        className={`${
          disabledCards && "o-selectable-cards__cards--disabled"
        } o-selectable-cards__cards`}
      >
        {poolCards.length > 0 ? (
          poolCards.map((card) => (
            <Card
              key={card.str}
              className={"a-card"}
              onClick={() => sendCard(card)}
              card={card}
            >
              {card.str}
            </Card>
          ))
        ) : (
          <p>No hay cartas</p>
        )}
      </div>
    </section>
  );
};

export default SelectableCardContainer;
