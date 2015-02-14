walk(document.body);

function walk(node) 
{
	// Based on Cloud to Butt, trivial changes.
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bCyber/g, "Dong");
	v = v.replace(/\bcyber/g, "dong");
	v = v.replace(/\bCYBER/g, "DONG");
	
	textNode.nodeValue = v;
}


