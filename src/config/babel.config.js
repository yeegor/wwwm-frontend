const presets = [
    '@babel/preset-env', 
    '@babel/preset-react'
];

const plugins = [
    '@babel/plugin-proposal-class-properties',
    'transform-rebem-jsx'
];

module.exports = {
    presets,
    plugins
};
