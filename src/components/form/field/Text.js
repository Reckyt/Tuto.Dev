import { withProps, compose } from 'recompose';
import Input from './Input';

const TextInner = withProps({
    type: 'text',
})(Input);

const Text = compose(
    // withState('counter', 'setCounter', 0),
)(TextInner);

export default Text;