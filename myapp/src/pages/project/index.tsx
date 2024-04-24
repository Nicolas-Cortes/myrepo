import { FullView, Label, LayoutView } from "@myrepo/components";
import Menu from "myapp/components/menu";
import SearchBar from "myapp/components/searchBar";

export default function Project() {
    return (
        <FullView>
            <LayoutView>
                <div className="div-1" id="grid-div">
                    <Menu />
                </div>
                <div className="div-2" id="grid-div">
                    <SearchBar />
                </div>
                <div className="project-div-3" id="grid-div">
                    <Label size="l" isBold>Project</Label>
                </div>
            </LayoutView>
        </FullView>
    )
}