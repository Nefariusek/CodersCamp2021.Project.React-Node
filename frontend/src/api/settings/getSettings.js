import { useContext, useState } from 'react';

import SettingsContext from '../../components/SettingsContext/SettingsContext';
import { BASE_URL } from '../../constants/restResources';
import Settings from '../../model/Settings';
import useGet from '../useGet';

const id = '623b1a3b7c640d439d4184bd'; // to be replaced by profile id

const useGetSettings = () => {
  const { settings, setSettings } = useContext(SettingsContext);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const { getData, getError, getLoading } = useGet(`${BASE_URL}api/settings/${id}`);
  setData(getData);
  setError(getError);
  setLoading(getLoading);

  setSettings(new Settings(data));

  return { settings, error, loading };
};

export default useGetSettings;
