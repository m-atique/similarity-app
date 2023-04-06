'use client'

import { FC, useState, useEffect } from "react";
import { type Language, defaultProps } from "prism-react-renderer";
import { useTheme } from "next-themes";
import darkTheme from "prism-react-renderer/themes/nightOwl";
import lightTheme from "prism-react-renderer/themes/nightOwlLight";
import Heighlight from "prism-react-renderer";
interface CodeProps {
  code: string;
  show: boolean;
  language: Language;
  animated: boolean;
  animateDelay?: number;
}

const Code: FC<CodeProps> = ({
  code,
  show,
  language,
  animated,
  animateDelay,
}) => {
  const { theme: applicationTheme } = useTheme();
  const [text, setText] = useState<string>(animated ? "" : code);

  useEffect(() => {
    if (animated && show) {
      let i = 0;
      setTimeout(() => {
        const intervalId = setInterval(() => {
          setText(code.slice(0, i));
          i++;
          if (i > code.length) {
            clearInterval(intervalId);
          }
        }, 15);
        return () => clearInterval(intervalId);
      }, animateDelay || 150);
    }
  }, [code, show, animated, animateDelay]);
  //----------------------------number of line
  const lines = text.split(/\r\n|\r|\n/).length;
  const theme = applicationTheme === "light" ? lightTheme : darkTheme;

  return (
    <Heighlight {...defaultProps} code={text} language={language} theme={theme}>
      {({ className, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={
            className + "transition-all w-fit bg-transparent py-0 no-scrollbar"
          }
          style={{
            maxHeight: show ? lines *24 : 0,
            opacity: show ? 1 : 0,
          }}
        >
          {tokens.map((line, i) => {
            //eslint-disable-next-line no-unused-vars
            const { key, ...rest } = getLineProps({ line, key: i });
            return (
                <div key={`line-${i}`} style={{ position: 'relative' }} {...rest}>
                {line.map((token, index) => {
                  // eslint-disable-next-line no-unused-vars
                  const { key, ...props } = getTokenProps({ token, i })
                  return <span key={index} {...props} />
                })}
              </div>
            );
          })}
        </pre>
      )}
    </Heighlight>
  );
};

export default Code;
