/*
   The function takes as a argument a (root of a) tree and builds its subtree
   from nodes whose names contain a given subsring (and all their ancestors and descendants).

   Nodes annotated by attributes:
   * matched attribute is set to true for nodes with matching names, otherwise false
   * expanded attribute is set to true for nodes with any matching descendants, otherwise false

   ancestorIsMatched is a housekeeping argument meaning that the current branch was already
   matched further to the root, so every node from it should be included in the result branch
   regardless of other factors.
*/
function search(root, str, ancestorIsMatched = false) {
    let matched = false;
    let expanded = false;
    let children =  [];

    // * The 'Node matches the search' Term means that Node's name contains the 'search'
    //   [renamed as 'str' to avoid name conflict with the function itself]
    //   as a substring (case insensitive)
    // * If Node mathches the search, its mached property must be set to true, otherwise false
    if (root.name.toLowerCase().includes(str)) {
        matched = true;
    }
    let thisOrAncestorIsMatched = matched || ancestorIsMatched;

    root.children.forEach(child => {
        let childSubtree = search(child, str, thisOrAncestorIsMatched);
        if (childSubtree !== null) {
            children.push(childSubtree);

            // * If at least one descendant of the Node matches the search, Node's expanded property
            //   must be set to true, otherwise false
            if (childSubtree.matched || childSubtree.expanded) {
                expanded = true;
            }
        }
    });

    // * Function doesn't modify original tree
    // * Node is included in the resulting set if Node, one of its ancestors [== thisOrAnscetorIsMatched],
    //   or one of its descendants [== expanded] is matched.
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

export default function (root, str) {
    return search(root, str.toLowerCase());
}