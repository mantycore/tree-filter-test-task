export default function search(root, str, ancestorIsMatched = false) {
    let matched = false;
    let expanded = false;
    let children =  [];

    if (root.name.toLowerCase().includes(str)) {
        matched = true;
    }
    let thisOrAncestorIsMatched = matched || ancestorIsMatched;

    root.children.forEach(child => {
        let childSubtree = search(child, str, thisOrAncestorIsMatched);
        if (childSubtree !== null || thisOrAncestorIsMatched) {
            children.push(childSubtree);
            if (childSubtree.matched || childSubtree.expanded) {
                expanded = true;
            }
        }
    });

    if (expanded || thisOrAncestorIsMatched) {
        return {
            name: root.name,
            children,
            matched,
            expanded
        };
    } else {
        return null;
    }
}
