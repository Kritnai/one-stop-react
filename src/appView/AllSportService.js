import React, { useState } from "react";
import AppHerderMember from "./component/AppHeaderMember";
import AppFooter from "./component/AppFooter";
import Karaoke from "./KaraokeService";
import MusicroomService from "./MusicRoomService";
import TennisService from "./TennisService";
import SquashService from "./SquashService";
import BadInterService from "./BadInterService";
import BadGym4Service from "./BadGym4Service";
import "./AllSportService.css";
function AllSportService() {
    const [showSport, setShowSport] = useState('karaoke');
    function getOption(value) {
        setShowSport(value);
        setSelectItem('all');
    }

    const [selectItem, setSelectItem] = useState('');
    function getCourt(value) {
        setSelectItem(value);
    }
    let showElement = null;
    let courtElement = null;
    if (showSport === "karaoke") {
        showElement = <Karaoke selectItem={selectItem} />
        courtElement =
            <>
                {/* <!-- karaoke size --> */}
                <option value="all" selected>All</option>
                <option value="size-S" > size S</option >
                <option value="size-M">size M</option>
                <option value="size-L">size L</option>
                <option value="size-XL">size XL</option>
            </>
    }
    else if (showSport === "music-room") {
        showElement = <MusicroomService selectItem={selectItem} />
        courtElement =
            <>
                {/* <!-- music rooom band --> */}
                <option value="all" selected>All</option>
                <option id="band" value="fullband-1">Fullband 1</option>
                <option id="band" value="fullband-2">Fullband 2</option>

            </>
    }
    else if (showSport === "tennis-court") {
        showElement = <TennisService selectItem={selectItem} />
        courtElement =
            <>
                {/* <!-- tennis --> */}
                <option value="all" selected>All</option>
                <option id="tennis" value="tennis-court-1">Tennis court 1</option>
                <option id="tennis" value="tennis-court-2">Tennis court 2</option>
                <option id="tennis" value="tennis-court-3">Tennis court 3</option>
                <option id="tennis" value="tennis-court-4">Tennis court 4</option>

            </>
    }
    else if (showSport === "squash-court") {
        showElement = <SquashService selectItem={selectItem} />
        courtElement =
            <>
                {/* <!-- squash --> */}
                <option value="all" selected>All</option>
                <option id="squash" value="squash-1">Squash court 1</option>
                <option id="squash" value="squash-2">Squash court 2</option>
                <option id="squash" value="squash-3">Squash court 3</option>
            </>
    }
    else if (showSport === "bad-gym4") {
        showElement = <BadGym4Service selectItem={selectItem} />
        courtElement =
            <>
                {/* <!-- badminton gym4 --> */}
                <option value="all" selected>All</option>
                <option id="badGym4" value="bad-gym4-1">Badminton court 1</option>
                <option id="badGym4" value="bad-gym4-2">Badminton court 2</option>
                <option id="badGym4" value="bad-gym4-3">Badminton court 3</option>
            </>
    }
    else if (showSport === "bad-interzone") {
        showElement = <BadInterService selectItem={selectItem} />
        courtElement =
            <>
                {/* <!-- badminton interzone --> */}
                <option value="all" selected>All</option>
                <option id="badInterzone" value="bad-inter-1">Badminton court 1</option>
                <option id="badInterzone" value="bad-inter-2">Badminton court 2</option>
                <option id="badInterzone" value="bad-inter-3">Badminton court 3</option>
            </>
    }
    return (
        <div className="allsportservice">
            <AppHerderMember />
            <section>
                <div className="container">
                    <div className="filter">
                        <div className="station">
                            <h1>Station</h1>
                            <select onChange={(e) => getOption(e.target.value)}>
                                <option value="karaoke" selected>Karaoke</option>
                                <option value="music-room">Music room</option>
                                <option value="tennis-court">Tennis</option>
                                <option value="squash-court">Squash</option>
                                <option value="bad-gym4">Badmintion gym4</option>
                                <option value="bad-interzone">Badmintion Interzone</option>
                            </select>

                        </div>

                        <div className="court_room">
                            <h1>Court/Room</h1>
                            <select value={selectItem} onChange={(e) => {getCourt(e.target.value)}}>
                                {courtElement}
                            </select>
                        </div>
                    </div>
                </div>
            </section>

            {showElement}


            <AppFooter />

        </div>
    )
}

export default AllSportService;