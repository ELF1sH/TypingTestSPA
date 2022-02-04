import styles from './MainWrapper.module.css'

import Header from '../header/Header';
import TestWrapper from '../main-content/test-wrapper/TestWrapper';
import LanguageToggler from '../test-language-toggler/LanguageToggler';
import Scoreboard from '../main-content/scoreboard/Scoreboard';

function MainWrapper() {

    return (
        <div className={styles.main_wrapper}>
            <Header />
            <TestWrapper />
            <Scoreboard />
            <LanguageToggler />
        </div>
    )
}

export default MainWrapper;
