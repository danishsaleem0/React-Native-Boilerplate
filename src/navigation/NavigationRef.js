import {createNavigationContainerRef} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

export const goBack = () => {
  if (navigationRef?.isReady()) {
    navigationRef?.goBack();
  }
};

export const resetNavigation = name => {
  if (navigationRef?.isReady()) {
    navigationRef?.reset({
      index: 0,
      routes: [{name: name}],
    });
  }
};
