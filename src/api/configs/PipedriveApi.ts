import axios from 'axios';

const PipedriveApi = axios.create({
  baseURL: 'https://tanakatech.pipedrive.com/api/v1',
});

export default PipedriveApi;
