export const DEFAULT_PLACE = {
    name:"Hawaii",
    place_id:"hawaii",
    adm_area1:"Hawaii",
    adm_area2:null,
    country:"United States of America",
    lat:"20.78785N",
    lon:"156.38612W",
    timezone:"Pacific/Honolulu",
    type:"administrative_area"
};
export const MEASUREMENT_SYSTEMS = {
    AUTO: 'auto',
    METRIC: 'metric',
    UK: 'uk',
    US: 'us',
    CA: 'ca',
};
export const UNITS = {
    metric: {
        temperature: '°C',
        precipitation: 'mm/h',
        wind_speed: 'm/s',
        visibility: 'km',
        humidity: '%',
        uv_index: '',
        cloud_cover: '%',
    },
    us: {
        temperature: '°F',
        precipitation: 'in/h',
        wind_speed: 'mph',
        visibility: 'mi',
        humidity: '%',
        uv_index: '',
        cloud_cover: '%',
    },
    uk: {
        temperature: '°C',
        precipitation: 'mm/h',
        wind_speed: 'mph',
        visibility: 'mi',
        humidity: '%',
        uv_index: '',
        cloud_cover: '%',
    },
    ca: {
        temperature: '°C',
        precipitation: 'mm/h',
        wind_speed: 'km/h',
        visibility: 'km',
        humidity: '%',
        uv_index: '',
        cloud_cover: '%',
    },
};
