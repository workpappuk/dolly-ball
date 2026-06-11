import { useWindowDimensions, Platform } from 'react-native';

export const useResponsive = () => {
  const { width } = useWindowDimensions();
  const isWeb = Platform.OS === 'web';

  return {
    isMobile: width < 768,
    isTablet: width >= 768 && width < 1200,
    isDesktop: width >= 1200,
    isWeb
  };
};
