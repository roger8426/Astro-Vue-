export default function updateMeta(meta: {
    title: string,
    description: string
}) {
    const { title, description } = meta;
    document.title = title;
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
        metaDescription.setAttribute("content", description);
    } else {
        const newMeta = document.createElement("meta");
        newMeta.name = "description";
        newMeta.content = description;
        document.head.appendChild(newMeta);
    }
}