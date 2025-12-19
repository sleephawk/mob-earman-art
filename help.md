[Home sets clipName]
│
▼
[Mob3d re-renders]
│
▼
[useEffect watching clipName triggers]
│
▼
[Find matching clip in animations]
│
├─> Search animations array
│ │
│ ▼
│ clip.name === clipName? → YES → targetClip
│ → NO → skip
│
▼
[Stop currently active clip action (if any)]
│
▼
[Get mixer.clipAction(targetClip)]
│
▼
[Play this action]
│
▼
[Store this action as "currently active action"]
│
▼
[useFrame updates mixer per delta]
│
▼
[Loop continues; next clipName change repeats this flow]
