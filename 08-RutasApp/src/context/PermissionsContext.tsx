import {createContext, useState} from 'react';
import {Platform} from 'react-native';
import {request, PERMISSIONS, PermissionStatus} from 'react-native-permissions';

export interface PermissionsState {
  locationStatus: PermissionStatus;
}

export const permissionInitState: PermissionsState = {
  locationStatus: 'unavailable',
};

type PermissionsContextProps = {
  permissions: PermissionsState;
  askLocationPermission: () => void;
  checkLocationPermission: () => void;
};

export const PermissionsContext = createContext({} as PermissionsContextProps);

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const PermissionsProvider = ({children}: Props) => {
  const [permissions, setPermissions] =
    useState<PermissionsState>(permissionInitState);

  const askLocationPermission = async () => {
    let permissionStatus: PermissionStatus = 'unavailable';
    if (Platform.OS === 'ios') {
      permissionStatus = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    } else if (Platform.OS === 'android') {
      permissionStatus = await request(
        PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      );
    }
    setPermissions({...permissions, locationStatus: permissionStatus});
  };
  const checkLocationPermission = () => {};

  return (
    <PermissionsContext.Provider
      value={{
        permissions,
        askLocationPermission,
        checkLocationPermission,
      }}>
      {children}
    </PermissionsContext.Provider>
  );
};
