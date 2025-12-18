import { createContext, type RefObject } from "react";

export const SkinRefContext = createContext<string | null>(null);

/**
 * The skin ref is to pass callbacks down to the lower
 * parts of the app, the children. The problem is keeping in
 * mind what's happening with that info.
 * For some reason it's way easier to envisage using
 * javascript.
 * Anyways the core issue is this idea of the children not moving
 * any data anywhere. The data must be moved via callbacks handed
 * down from the parent
 * we can also pass a reference into use context as well......
 * which is confusing.
 * I understand a useRef survives rerenders unless explicitly reset.
 *
 *
 * So the issue then is when re-skinning the textures, the source
 * image as well is not available because it gets squashed.
 * I would have to manually add the source for each blender
 * model. Each would have to have an array attached to that model so
 * that I wouldn't have to go digging for it.
 * Fundamentals: holding all the fundamentals in my head a tht esmae time is crazy.
 *
 * And that is why it's problematic. Saying it's problematic over
 * and over again doesn't really do anything. And so we get stuck.
 *
 * I caaaan't keep checking my phone, phoooone
 *
 * I need ADHD meds nowwwwwwww
 *
 * ARRRGHHHHHHH
 *
 *
 * Hmmmmmmmmm
 *
 *
 *
 *
 *
 * why is it so hard to grasp? Because perhaps there's all this noise and
 * my mind is intentionally ignoring certain things in order to progress?
 *
 * However that exact instinct might be whats killing me. When i
 * look at all the docs, they seem so vast. However, in comparison to say, a book,
 * they are minute. That page on Railway deployment didn't take very long at
 * all to sort out.
 *
 * It's the docs that seem to be the way. Understanding the whole picture is better.
 *
 * However, swapping skins, i think i will need to change the glb
 * via a variable.
 *
 * I think I will have to
 *
 * 1) Have the glb in my public assets
 * 2) Save the current public asset in a ref
 * 3) set the ref to a few types,
 *
 *
 * I'm getting distracted by the context, what's it for? it's
 * so that the mob3d.tsx can pass the ref out of itself and up to
 * the parent without drilling. What it means is when I click
 * a button, I can change the ref further down the tree. So let's look again.
 *
 * right so now the ref is in the useRef, good. it's a string. the context expects
 * a string, which is good. now the value
 */
