import {
  DocsContainer as BaseContainer,
  DocsContainerProps,
} from '@storybook/blocks';
import { addons } from '@storybook/preview-api';
import React, { FC, PropsWithChildren, useEffect, useState } from 'react';
import { DARK_MODE_EVENT_NAME } from 'storybook-dark-mode';
import { themes } from '@storybook/theming';

const channel = addons.getChannel();

export const DocsContainer: FC<PropsWithChildren<DocsContainerProps>> = ({
  children,
  context,
}) => {
  const [isDark, setDark] = useState(false);

  useEffect(() => {
    channel.on(DARK_MODE_EVENT_NAME, setDark);
    return () => channel.off(DARK_MODE_EVENT_NAME, setDark);
  }, [channel]);

  return (
    <BaseContainer
      theme={
        isDark
          ? {
              ...themes.dark,
              appContentBg: '#171926',
              barBg: '#454751',
              textColor: '#edf0f5',
              textMutedColor: '#a5a5a5',
              buttonBg: '#454751',
              fontBase: 'Rubik, sans-serif',
            }
          : {
              ...themes.normal,
              appContentBg: '#edf0f5',
              barBg: '#d5d8dd',
              textColor: '#171926',
              textMutedColor: '#454751',
              buttonBg: '#b9babe',
              inputTextColor: '#171926',
              fontBase: 'Rubik, sans-serif',
            }
      }
      context={context}
    >
      {children}
    </BaseContainer>
  );
};
