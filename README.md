## Media Manipulation with Context x CSS

So, the majority of virtual DOM visibility manipulation is handled by CSS through various classnames. However, for rendering multiple canvases, it was important to include a top level context to ensure state was keeping track of screen width and providing it to the child nodes. This is crucial on smaller screens, otherwise the browser attempts to keep the other, much bigger glb in the DOM ready to be seen again.
