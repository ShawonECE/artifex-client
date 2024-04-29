import PropTypes from 'prop-types';
import { Typewriter } from 'react-simple-typewriter';

const TypeWriting = ({text, keywords}) => {
    return (
        <div>
            <h1 className='text-center text-4xl font-bold dark:text-white'>
                {text}...{' '}
                <span className='text-orange-400'>
                    <Typewriter
                        words={keywords}
                        loop={15}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                    />
                </span>
            </h1>
        </div>
    );
};

TypeWriting.propTypes = {
    text: PropTypes.string.isRequired,
    keywords: PropTypes.array.isRequired,
};

export default TypeWriting;