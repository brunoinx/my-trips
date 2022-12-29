import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';
import { LinkWrapper } from 'components/LinkWrapper';

import * as S from './styles';

const AboutTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>

    <S.Heading>My Trips</S.Heading>

    <S.Body>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic commodi
        fuga ut sint eos quisquam. Ratione qui nemo optio exercitationem magnam,
        amet omnis harum, delectus officiis corporis facilis ullam ipsum.
      </p>
    </S.Body>
  </S.Content>
);

export default AboutTemplate;
