import {h, app, text} from "./hyperapp.js";
import {
    body, main, header, footer, article, section, aside, div,
    table, thead, tbody, tfoot, tr, th, td, 
    ul, li, nav, form, input, label,
    h1, h2, p, a, span, img, canvas, code, pre, svg, path, br,
    select, option
} from "./hyperapp.html.js";

const node = document.querySelector("body");
console.log("node", node);

const xmark = () =>
    svg({height:"48px", version:"1.1", viewBox:"0 0 512 512", width:"48px", "xml:space":"preserve", xmlns:"http://www.w3.org/2000/svg"}, [
        path({d:"M256,33C132.3,33,32,133.3,32,257c0,123.7,100.3,224,224,224c123.7,0,224-100.3,224-224C480,133.3,379.7,33,256,33z    M364.3,332.5c1.5,1.5,2.3,3.5,2.3,5.6c0,2.1-0.8,4.2-2.3,5.6l-21.6,21.7c-1.6,1.6-3.6,2.3-5.6,2.3c-2,0-4.1-0.8-5.6-2.3L256,289.8   l-75.4,75.7c-1.5,1.6-3.6,2.3-5.6,2.3c-2,0-4.1-0.8-5.6-2.3l-21.6-21.7c-1.5-1.5-2.3-3.5-2.3-5.6c0-2.1,0.8-4.2,2.3-5.6l75.7-76   l-75.9-75c-3.1-3.1-3.1-8.2,0-11.3l21.6-21.7c1.5-1.5,3.5-2.3,5.6-2.3c2.1,0,4.1,0.8,5.6,2.3l75.7,74.7l75.7-74.7   c1.5-1.5,3.5-2.3,5.6-2.3c2.1,0,4.1,0.8,5.6,2.3l21.6,21.7c3.1,3.1,3.1,8.2,0,11.3l-75.9,75L364.3,332.5z"})
    ]);

const plusmark = () =>
    svg({height:"48", viewBox:"0 0 48 48", width:"48", xmlns:"http://www.w3.org/2000/svg"}, [
        path({d:"M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm10 22h-8v8h-4v-8h-8v-4h8v-8h4v8h8v4z"})
    ]);

const savemark = () =>
    svg({viewBox:"0 0 24 24", xmlns:"http://www.w3.org/2000/svg"}, [
        path({d:"M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2ZM9.71,10.29,11,11.59V6h2v5.59l1.29-1.29,1.41,1.41L12,15.41,8.29,11.71ZM16,18H8V16h8Z"})
    ]);

const swapmark = () =>
    svg({xmlns:"http://www.w3.org/2000/svg", width:"32", height:"32", viewBox:"0 0 256 256"}, [
       path({
           d:"M224,48V152a16,16,0,0,1-16,16H99.31l10.35,10.34a8,8,0,0,1-11.32,11.32l-24-24a8,8,0,0,1,0-11.32l24-24a8,8,0,0,1,11.32,11.32L99.31,152H208V48H96v8a8,8,0,0,1-16,0V48A16,16,0,0,1,96,32H208A16,16,0,0,1,224,48ZM168,192a8,8,0,0,0-8,8v8H48V104H156.69l-10.35,10.34a8,8,0,0,0,11.32,11.32l24-24a8,8,0,0,0,0-11.32l-24-24a8,8,0,0,0-11.32,11.32L156.69,88H48a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16H160a16,16,0,0,0,16-16v-8A8,8,0,0,0,168,192Z"
        })
    ]);

const palettemark = () =>
    svg({xmlns:"http://www.w3.org/2000/svg", width:"32", height:"32", viewBox:"0 0 256 256"}, [
        path({d:"M200.77,53.89A103.27,103.27,0,0,0,128,24h-1.07A104,104,0,0,0,24,128c0,43,26.58,79.06,69.36,94.17A32,32,0,0,0,136,192a16,16,0,0,1,16-16h46.21a31.81,31.81,0,0,0,31.2-24.88,104.43,104.43,0,0,0,2.59-24A103.28,103.28,0,0,0,200.77,53.89Zm13,93.71A15.89,15.89,0,0,1,198.21,160H152a32,32,0,0,0-32,32,16,16,0,0,1-21.31,15.07C62.49,194.3,40,164,40,128a88,88,0,0,1,87.09-88h.9a88.35,88.35,0,0,1,88,87.25A88.86,88.86,0,0,1,213.81,147.6ZM140,76a12,12,0,1,1-12-12A12,12,0,0,1,140,76ZM96,100A12,12,0,1,1,84,88,12,12,0,0,1,96,100Zm0,56a12,12,0,1,1-12-12A12,12,0,0,1,96,156Zm88-56a12,12,0,1,1-12-12A12,12,0,0,1,184,100Z"})
    ]);

const helpmark = () =>
    svg({xmlns:"http://www.w3.org/2000/svg", width:"32", height:"32", fill:"#000000", viewBox:"0 0 256 256"}, [
        path({d:"M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180ZM128,72c-22.06,0-40,16.15-40,36v4a8,8,0,0,0,16,0v-4c0-11,10.77-20,24-20s24,9,24,20-10.77,20-24,20a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-.72c18.24-3.35,32-17.9,32-35.28C168,88.15,150.06,72,128,72Zm104,56A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"})
    ]);

// Array operations
const insert = (a, i, v) => [...a.slice(0, i), v, ...a.slice(i)];
const remove = (a, i) => [...a.slice(0, i), ...a.slice(i + 1)];
const update = (a, i, v) => insert(remove(a, i), i, v);

// Colours
const channel = (v) => (v.toFixed()>>>0).toString(16);
const colour = (gen) =>
    "#" + (
        "000000" +
        channel(gen()) +
        channel(gen()) +
        channel(gen())
    ).slice(-6);

// values
const pc = (i, l) => `${100 * (i + 1) / l}%`;

const gen_gradient = (angle, type, colours) => (
    colours = colours
        .map(({name, colour}, i) => `${colour} ${pc(i, colours.length)}`)
        .join(","),
    `${type}-gradient(${colours})`
);

const nodefault = (callback) => (state, event) => {
    event.preventDefault();
    return callback(state, event);
};

const progressx = (x, target) =>
    (x - target.getClientRects()[0].x) / target.getBoundingClientRect().width;

const progressy = (y, target) =>
    (y - target.getClientRects()[0].y) / target.getBoundingClientRect().height;

const onsave = ({save, ...state}) => ({
    ...state,
    save: !save
});

const onhover = (state, {x, y, target}) => (
    x = 360 * progressx(x, target) * 0.01,
    y = 360 * progressy(y, target) * 0.01,
    target.style.setProperty("--mouse-x", `${x}rad`),
    target.style.setProperty("--mouse-y", `${y}rad`),
    state
);

const onremove = (i) => ({colours, ...state}) => ({
    ...state,
    colours: colours.length < 2?
        [group("colour-1", colour(() => 255 * Math.random()))]:
        remove(colours, i)
});

const oninsert = (i) => ({colours, ...state}) => ({
    ...state,
    colours: insert(colours, i, group(`colour-${colours.length}`, colour(() => 255 * Math.random())))
});

const onedit = (i, prop) => ({colours, ...state}, event) => ({
    ...state,
    colours: update(colours, i, {...colours[i], [prop]:event.target.value})
});

const onswap = ({style, ...state}) => ({
    ...state,
    // Todo: clamp for more styles
    style: (1 + style) % styles.length
});

const onhelp = ({help, ...state}) => ({
    ...state,
    help: !help
});

const ongradientselect = ({gradient_style, ...state}, event) => ({
    ...state,
    gradient_style: event.target.value
});

const button = ({onclick, ...props}, children) => a({
    ...props,
    class: "button",
    href: "#",
    onmousemove: nodefault(onhover),
    onclick: nodefault(onclick),
}, children);

const palette = ({colours}) =>
    main([
        ...colours
            .map(
                ({name, colour}, i) =>
                    section({
                        class: "colour",
                        style: {
                            background: colour
                        }
                    }, [
                        p([
                            button({onclick:nodefault(onremove(i))}, [xmark()]),
                            button({onclick:nodefault(oninsert(i))}, [plusmark()]),
                        ]),
                        p([
                            input({type:"text", value:colour, oninput:onedit(i, "colour")}),
                            input({type:"text", value: name, oninput:onedit(i, "name")})
                        ]),
                    ])
            )
    ]);

const palette_out = ({colours, save}) => ([
    p([
        button({onclick:onsave}, [xmark()])
    ]),
    pre([
        ...colours
            .map(
                ({name, colour}) =>
                    param(`--colour-${name}`, colour)
            )
            .flat()
    ])
]);

const palette_menu = () => [];

const gradient = ({colours, gradient_style}) =>
    main({
        style: {
            background: gen_gradient(180, gradient_style, colours)
        }
    }, [
        ...colours
            .map(
                ({name, colour}, i) =>
                    section({
                        class: "colour",
                        style: {
                            background: "transparent"
                        }
                    }, [
                        p([
                            button({onclick:nodefault(onremove(i))}, [xmark()]),
                            button({onclick:nodefault(oninsert(i))}, [plusmark()]),
                        ]),
                        p([
                            input({type:"text", value:colour, oninput:onedit(i, "colour")}),
                            input({type:"text", value: name, oninput:onedit(i, "name")})
                        ]),
                    ])
            )
    ]);

const gradient_out = ({colours, gradient_style, save}) => ([
    p([
        button({onclick:onsave}, [xmark()]),
        ...gradient_menu({gradient_style})
    ]),
    pre([
        ...colours
            .map(({name, colour}) => param(`--colour-${name}`, gradient_style, colour))
            .flat(),
        br(),
        text(`${gradient_style}-gradient(`),
        ...colours
            .map(({name, colour}) => [br(), text("\t"), ...get_attr(`--colour-${name}`), text(", ")])
            .flat()
            // Remove dangling ","
            .slice(0, -1),
        br(),
        text(")")
    ])
]);

const gradient_alternatives = () => [
    "linear",
    "radial",
    "repeating-linear",
    "conic-gradient"
];

const gradient_menu = ({gradient_style}) => [
    select({onchange:ongradientselect}, [
        ...gradient_alternatives()
            .map(
                (v) => option({value: v, selected: gradient_style==v}, [text(v)])
            )
    ]),
];

const styles = [
    {markup: palette, output: palette_out, menu: palette_menu},
    {markup: gradient, output: gradient_out, menu: gradient_menu}
];

const attr = (v) => code({class: "attr"}, text(`${v}`));
const value = (v) => code({class: "value"}, text(`${v};`));
const param = (k, v) => [attr(k), text(": "), value(v), br()];
const get_attr = (k) => [text("var("), attr(k), text(")")];

const render = ({colours, style, save, help, gradient_style}) =>
    body([
        header([
            !help && !save &&
            aside([
                a({href:"/", class: "logo"}, [palettemark()]),
                button({onclick:onhelp}, [helpmark()]),
                button({onclick:onsave}, [savemark()]),
                button({onclick:onswap}, [swapmark()]),
                ...styles[style].menu({gradient_style})
            ]),

            help &&
            aside({class: "modal help"}, [
                p([
                    button({onclick:onhelp}, [xmark()]),
                ]),
                h1([text("Colours")]),
                p([text("Minimal colour palette generator with optional CSS output.")]),
                ul([
                    li([text("Generate CSS properties from a list of colours.")]),
                    li([text("Generate CSS properties and a gradient.")]),
                    li([text("Change the name of the properties as well as the colours.")]),
                    li([text("Add or remove colours at will.")]),
                ])
            ]),

            !help && save &&
            aside({class: "modal"}, [
                ...styles[style].output({colours, gradient_style, save})
            ]),
        ]),

        styles[style].markup({colours, gradient_style})
    ]);

const group = (name, colour) => ({name, colour});

const colours = [
    group("bg-primary", "#C46564"),
    group("bg-secondary", "#F0E999"),
    group("text-primary", "#B8C99D"),
    group("text-secondary", "#9B726F"),
    group("info", "#EEB15B")
];

const dispatch = await app({
    init:{colours, style:0, gradient_style: "linear", help: false},
    view: render,
    node
});
