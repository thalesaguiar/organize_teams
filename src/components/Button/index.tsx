import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import { Container, Title, ButtonTypeStyleProps } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps;
}

export function Button({ title, type = 'PRIMARY', ...rest }: Props) {
  return (
    <Container
    type="PRIMARY"
      {...rest}
    >
      <Title>
        {title}
      </Title>
    </Container>
  )
}