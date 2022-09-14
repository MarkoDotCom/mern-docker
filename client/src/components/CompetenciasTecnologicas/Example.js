"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Settings_1 = require("./Settings");
var react_material_ui_carousel_1 = require("react-material-ui-carousel");
// import '../style/Example.scss';
var material_1 = require("@mui/material");
var Example = function () {
    var _a = (0, react_1.useState)(Settings_1.DefaultSettingsT), settings = _a[0], setSettings = _a[1];
    return (<div style={{ marginTop: "50px", color: "#494949" }}>
            <material_1.Typography variant='h4'>Example: eBay&trade; style</material_1.Typography>
            <br />
            <react_material_ui_carousel_1["default"] className="Example" {...settings}>
                {items.map(function (item, index) {
            return <Banner item={item} key={index} contentPosition={item.contentPosition}/>;
        })}
            </react_material_ui_carousel_1["default"]>
            <br />
            <Settings_1["default"] settings={settings} setSettings={setSettings}/>
        </div>);
};
var Banner = function (props) {
    var contentPosition = props.contentPosition ? props.contentPosition : "left";
    var totalItems = props.length ? props.length : 3;
    var mediaLength = totalItems - 1;
    var items = [];
    var content = (<material_1.Grid item xs={4} key="content">
            <material_1.CardContent className="Content">
                <material_1.Typography className="Title">
                    {props.item.Name}
                </material_1.Typography>

                <material_1.Typography className="Caption">
                    {props.item.Caption}
                </material_1.Typography>

                <material_1.Button variant="outlined" className="ViewButton">
                    View Now
                </material_1.Button>
            </material_1.CardContent>
        </material_1.Grid>);
    for (var i = 0; i < mediaLength; i++) {
        var item = props.item.Items[i];
        var media = (<material_1.Grid item xs={4} key={item.Name}>
                <material_1.CardMedia className="Media" image={item.Image} title={item.Name}>
                    <material_1.Typography className="MediaCaption">
                        {item.Name}
                    </material_1.Typography>
                </material_1.CardMedia>

            </material_1.Grid>);
        items.push(media);
    }
    if (contentPosition === "left") {
        items.unshift(content);
    }
    else if (contentPosition === "right") {
        items.push(content);
    }
    else if (contentPosition === "middle") {
        items.splice(items.length / 2, 0, content);
    }
    return (<material_1.Card raised className="Banner">
            <material_1.Grid container spacing={0} className="BannerGrid">
                {items}
            </material_1.Grid>
        </material_1.Card>);
};
var items = [
    {
        Name: "Electronics",
        Caption: "Electrify your friends!",
        contentPosition: "left",
        Items: [
            {
                Name: "Macbook Pro",
                Image: "https://source.unsplash.com/featured/?macbook"
            },
            {
                Name: "iPhone",
                Image: "https://source.unsplash.com/featured/?iphone"
            }
        ]
    },
    {
        Name: "Home Appliances",
        Caption: "Say no to manual home labour!",
        contentPosition: "middle",
        Items: [
            {
                Name: "Washing Machine WX9102",
                Image: "https://source.unsplash.com/featured/?washingmachine"
            },
            {
                Name: "Learus Vacuum Cleaner",
                Image: "https://source.unsplash.com/featured/?vacuum,cleaner"
            }
        ]
    },
    {
        Name: "Decoratives",
        Caption: "Give style and color to your living room!",
        contentPosition: "right",
        Items: [
            {
                Name: "Living Room Lamp",
                Image: "https://source.unsplash.com/featured/?lamp"
            },
            {
                Name: "Floral Vase",
                Image: "https://source.unsplash.com/featured/?vase"
            }
        ]
    }
];
exports["default"] = Example;
