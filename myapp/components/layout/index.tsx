import { LayoutView } from "@myrepo/components"
import Menu from "../menu"
import SearchBar from "../searchBar"
import TaskList from "../taskList"


export const Layout = () => {
    return (
        <LayoutView>
            <div className="div-1" id="grid-div">
                <Menu />
            </div>
            <div className="div-2" id="grid-div">
                <SearchBar />
            </div>
            <div className="div-3" id="grid-div">3</div>
            <div className="div-4" id="grid-div">
                <TaskList />
            </div>
            <div className="div-5" id="grid-div">5</div>
            <div className="div-6" id="grid-div">6</div>
            <div className="div-7" id="grid-div">7</div>
            <div className="div-8" id="grid-div">8</div>
        </LayoutView>
    )
}