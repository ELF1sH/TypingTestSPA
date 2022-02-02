import styles from './MainWrapper.module.css'

import Header from '../header/Header';
import TestWrapper from '../main-content/test-wrapper/TestWrapper';
import LanguageToggler from '../test-language-toggler/LanguageToggler';

function MainWrapper() {

    return (
        <div className={styles.main_wrapper}>
            <Header />
            <TestWrapper />
            <LanguageToggler />
        </div>
    )
}

export default MainWrapper;
