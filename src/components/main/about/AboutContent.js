export default function AboutContent({ content }) {
  return (
    <div className="space-y-5">
      <h3 className="text-3xl font-bold bg-custom-gradient text-transparent bg-clip-text">
        {content.title}
      </h3>
      <p>{content.description}</p>
    </div>
  );
}
