import { useEffect, useState } from "react";
import { Platform, NativeModules } from "react-native";

const { DeviceName, OSVersionModule } = NativeModules;

const useDeviceInformation = () => {
  const [deviceName, setDeviceName] = useState("Carregando...");
  const [osVersion, setOsVersion] = useState<string | null>(null);

  useEffect(() => {
    const fetchDeviceInfo = async () => {
      await Promise.all([fetchDeviceName(), fetchOSVersion()]);
    };
    fetchDeviceInfo();
  }, []);

  

  const fetchDeviceName = async () => {
    try {
      const name = await DeviceName.getDeviceName();
      setDeviceName(name);
    } catch {
      setDeviceName("Erro ao obter nome");
    }
  };

  const fetchOSVersion = async () => {
    try {
      if (OSVersionModule && OSVersionModule.getOSVersion) {
        const version = await OSVersionModule.getOSVersion();
        setOsVersion(version);
      } else {
        const version = Platform.Version.toString();
        setOsVersion(version);
      }
    } catch {
      setOsVersion("Erro ao obter versão");
    }
  };

  return { deviceName, osVersion };
};

export default useDeviceInformation;
