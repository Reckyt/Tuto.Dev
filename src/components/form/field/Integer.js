import { withProps } from 'recompose';
import Input from './Input';

const normalize = (value, previousValue = null) => {
    if ('' === value) {
        return null;
    }

    const parsed = parseInt(value, 10);

    return Number.isNaN(parsed) ? previousValue : parsed;
};

const Integer = withProps({
    normalize,
    type: 'number',
})(Input);

export default Integer;
