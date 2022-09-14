"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.DefaultSettingsT = void 0;
var react_1 = require("react");
var material_1 = require("@mui/material");
require("../style/Settings.scss");
exports.DefaultSettingsT = {
    autoPlay: true,
    animation: "fade",
    indicators: true,
    duration: 500,
    navButtonsAlwaysVisible: false,
    navButtonsAlwaysInvisible: false,
    cycleNavigation: true,
    fullHeightHover: true,
    swipe: true
};
var Settings = function (_a) {
    var settings = _a.settings, setSettings = _a.setSettings;
    /** Default function for Switches */
    var toggler = function (event) {
        var _a;
        setSettings(__assign(__assign({}, settings), (_a = {}, _a[event.target.value] = !settings[event.target.value], _a)));
    };
    /** Default function for Radio Groups */
    var radio = function (event) {
        var _a;
        setSettings(__assign(__assign({}, settings), (_a = {}, _a[event.target.name] = event.target.value, _a)));
    };
    /** Default function for Sliders */
    var slider = function (event, value) {
        var _a;
        console.log(event);
        console.log(value);
        setSettings(__assign(__assign({}, settings), (_a = {}, _a[event.target.name] = value, _a)));
    };
    var Toggler = function (_a) {
        var name = _a.name;
        return (<material_1.FormControlLabel control={<material_1.Switch onChange={toggler} checked={settings[name]} value={name} color="primary"/>} label={name} labelPlacement='end'/>);
    };
    return (<>
            <div className="Options">
                <div>
                    <material_1.Typography>General Options</material_1.Typography>
                    <Toggler name="autoPlay"/>
                    <Toggler name="indicators"/>
                    <Toggler name="swipe"/>
                </div>
                
                <div>
                    <material_1.Typography>Navigation (Buttons) Options</material_1.Typography>
                    <Toggler name="cycleNavigation"/>
                    <Toggler name="navButtonsAlwaysVisible"/>
                    <Toggler name="navButtonsAlwaysInvisible"/>
                    <Toggler name='fullHeightHover'/>
                </div>

                <div>
                    <material_1.Typography>Animation Options</material_1.Typography>
                    <material_1.FormControlLabel control={<div>
                                <material_1.RadioGroup name="animation" value={settings.animation} onChange={radio} row style={{ marginLeft: "10px" }}>
                                    <material_1.FormControlLabel value="fade" control={<material_1.Radio color="primary"/>} label="Fade"/>
                                    <material_1.FormControlLabel value="slide" control={<material_1.Radio color="primary"/>} label="Slide"/>
                                </material_1.RadioGroup>
                            </div>} label=""/>

                    <material_1.FormControlLabel control={<div style={{ width: '100%' }}>
                                {/* <Typography>
                Animation Duration in ms
            </Typography> */}
                                <material_1.Slider defaultValue={500} getAriaValueText={function () { return "".concat(settings.duration, "ms"); }} aria-labelledby="discrete-slider" valueLabelDisplay="auto" step={100} marks min={100} max={3000} onChangeCommitted={function (e, v) {
                e.target.name = 'duration';
                slider(e, v);
            }}/>
                            </div>} label="Animation Duration in ms" labelPlacement='bottom'/>
                </div>
            </div>
        </>);
};
exports["default"] = Settings;
