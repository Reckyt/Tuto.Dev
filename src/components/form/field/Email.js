import { withProps } from 'recompose';
import Input from './Input';

const Email = withProps({
    type: 'email',
})(Input);

export default Email;
