import { Header } from '@components/header';
import { Container, Content, Icon } from './styles';
import { Highlight } from '@components/Highlight';
import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

export function NewGroup() {

  const [group, setGroup] = useState('');

  const navigation = useNavigation();

  function handleNew() {
    navigation.navigate('players' , { group : group }) /* ou passamos assim {group : group } mas a primeira forma é melhor  */
  }

  return (
    <Container>
      <Header showBackButton />
      
      <Content>
        <Icon />

        <Highlight
        title="Nova turma"
        subtitle="crie uma turma para adicionar as pessoas"
      />

      <Input
        placeholder="Nome da turma"
        onChangeText={setGroup}
        />

      <Button
          title="Criar"
          style={{ marginTop: 20 }}
          onPress={handleNew}
      /> 
      </Content>

      
    </Container>
  )
}