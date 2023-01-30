import React , {useContext} from 'react';
import { ThemeContext } from './themeContext';
import { BsFillSunFill , BsFillMoonFill } from 'react-icons/bs';

const ToggleTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      {theme === 'dark' ? (
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="cursor-pointer"
        >
         <BsFillSunFill className="big-screen:w-[25px] big-screen:h-[25px] tablet:w-[20px] h-[20px]"/>
        </button>
      ) : (
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="cursor-pointer"
        >
        <BsFillMoonFill className="big-screen:w-[25px] big-screen:h-[25px] tablet:w-[20px] h-[20px]"/>
        </button>
      )}
    </div>
  );
};
export default ToggleTheme