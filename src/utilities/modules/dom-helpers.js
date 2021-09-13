export function setAttribute(el, attribute, value) {
    if (el.getAttribute(attribute) === value) {
        return;
    }

    el.setAttribute(attribute, value);
}

export function setStyle(el, styleName, value) {
    if (el.style[styleName] === value) {
        return;
    }

    el.style[styleName] = value;
}
