import { Text, Image } from "react-native";
import { Container, WhatItOffer, ButtonShowAll, TextForButton } from "./style";
import { useRef, useState } from "react";
import { GlobalVariables } from "../../styles";

export default function WhatItOffers({ data }: { data: any }) {
  const [showAll, setShowAll] = useState(false);
  const countRef = useRef(0);
  const featuresArray = [
    "box blindex",
    "closet",
    "cozinha americana",
    "interfone",
    "mobiliado",
    "varanda gourmet",
    "varanda",
    "sala de jogos",
    "acesso para pessoas com deficiência",
    "suporte para bicicletas",
    "colega de trabalho",
    "elevador",
    "lavanderia",
    "recepção",
    "sauna",
    "planejado",
    "construído",
    "feito",
    "aceita animais",
    "quarto de serviço",
    "closet no quarto",
    "armário no banheiro",
    "armário na cozinha",
    "academia",
    "churrasqueira",
    "espaço gourmet",
    "espaço verde",
    "jardim",
    "piscina",
    "playground",
    "quadra esportiva",
    "salão de festas",
    "janelas amplas",
    "tv",
  ];

  if (data) {
    return (
      <>
        <Container style={{ marginTop: 20 }}>
          {featuresArray.map((element, index) => {
            const keys = Object.keys(data);
            if (
              (data[keys[index]] == 1 && countRef.current < 4) ||
              (data[keys[index]] == 1 && showAll)
            ) {
              countRef.current++;
              return (
                <WhatItOffer key={index}>
                  <Image
                    height={30}
                    width={30}
                    source={require("./../../../assets/scale.png")}
                  ></Image>
                  <Text
                    style={{
                      fontSize: 18,
                      color: GlobalVariables.color.ForDescription,
                    }}
                    key={index}
                  >
                    {element}
                  </Text>
                </WhatItOffer>
              );
            }
          })}
        </Container>
        {!showAll && (
          <ButtonShowAll
            onPress={() => setShowAll(true)}
            style={{ marginTop: 20 }}
          >
            <TextForButton>Mostrar todas as vantagens</TextForButton>
          </ButtonShowAll>
        )}
      </>
    );
  } else {
    return <></>;
  }
}
