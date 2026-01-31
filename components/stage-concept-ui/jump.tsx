import Seito from "@/components/stage-concept-ui/seito";
import JumpSection, { JumpLinkContent } from "@/components/shared/jump-section";

const contents: JumpLinkContent[] = [
    {
        title: "LOCATION",
        description: "世界的な会議や学会が開催される札幌コンベンションセンターが舞台。生徒の熱量を引き出すこの会場で、かつてない体験をお届けします。",
        href: "/location",
        imageSrc: "/topic/Location.jpg",
        imageAlt: "Location Image",
    },
];

export default function Jump() {
    return <JumpSection contents={contents} topContent={<Seito />} />;
}
