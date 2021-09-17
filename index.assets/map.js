const data = [
    {
        when: '5 May 1818',
        what: '出生',
        where: "Brückengasse 664 in Trier",
        latLng: '49°45′24″N 06°38′29″E',
        detail: "Trier 是个古城，后来成为普鲁士王国下莱茵省的一个市。",
    },
    {
        when: '1819',
        what: '搬家',
        where: 'Porta Nigra',
        latLng: '49°45′35″N 6°38′38″E',
        zoom: 16,
        detail: '新家有 10 间房。Porta Nigra 是 Trier 的一处文化遗产。这一年马克思成为了家里“最大的孩子”。（第二个哥哥也去世了）'
    },
    {
        when: '1830',
        what: '高中毕业',
        where: '<span lang="de">Gymnasium zu Trier</span>（Trier 市立高中）',
        latLng: '49°45′24″N 06°38′29″E',
        zoom: 14,
    },
    {
        when: 'October 1835',
        what: '进入大学',
        where: 'University of Bonn',
        latLng: '50.7338124, 7.1022465',
        zoom: 16,
        detail: '马克思想学哲学和文学，但 Heinrich Marx 坚持让他学更实际的法律。',
    },
    {
        when: '1836 Summer',
        where: 'Trier',
        latLng: '49°45′24″N 06°38′29″E',
        detail: '马克思回 Trier 度过了夏秋，开始严肃对待自己的学习和生活。'
    },
    {
        when: '19 June 1843',
        what: '与 Jenny von Westphalen 结婚',
        where: 'Kreuznach 的一个新教教堂',
        latLng: '49°51′N 7°52′E',
    },
    {
        when: 'October 1836',
        what: '转学，进入法学院',
        where: 'Humboldt University of Berlin',
        latLng: '52°31′05″N 13°23′36″E',
        zoom: 16,
        detail: '因为成绩下滑严重，Heinrich Marx 强制马克思转去了更严肃且重学术的 University of Berlin。马克思租住在 Mittelstrasse，在学校逐渐接触了黑格尔的观点。'
    },
    {
        when: 'April 1841',
        what: '发表学位论文',
        where: 'Humboldt University of Berlin',
        latLng: '52°31′05″N 13°23′36″E',
        zoom: 16,
        detail: '由于这篇论文（《德谟克利特与与享乐主义者的自然哲学间的区别》）在 University of Berlin 教授间引起争议，马克思最终转投给了 University of Jena，他的学位也是由后者授予的。'
    },
    {
        when: '1842',
        what: '成为记者',
        where: 'Cologne',
        latLng: '50°56′11″N 6°57′10″E',
        detail: '马克思曾考虑过搞学术，但政府日渐反对古典自由主义和青年黑格尔派，所以行不通。马克思这时给激进派报《莱茵新闻》（<cite lang="de">Rheinische Zeitung</cite>）投稿，表露出他对社会主义的早期观点，并开始关心经济学。'
    },
    {
        when: 'October 1843',
        what: '新报纸',
        where: '23 Rue Vaneau in Paris',
        latLng: '48.8516, 2.319',
        zoom: 16,
        detail: '这里是 Arnold Ruge 家，马克思夫妇在巴黎最初的住所（也有说是这条街 38 号的）；这儿生活条件差，第二年生女儿前后他们就搬出去了。这一年。《莱茵新闻》被封，马克思成为了《德法年鉴》（<cite lang="de">Deutsch-Französische Jahrbücher</cite>）的合著作者。这是个新的激进左翼报纸。在给它的投稿中，马克思意识到无产阶级的革命性力量，并开始接受共产主义。不久《德法年鉴》也被封了，马克思开始给《前进！》（<cite lang="de">Vorwärts!</cite>）投稿。此时马克思完善了对社会主义和辩证法的看法。到1844年秋，“马克思主义”的所有主要原理基本都已显出轮廓。'
    },
    {
        when: '28 August 1844',
        what: '遇见恩格斯',
        where: 'Café de la Régence',
        latLng: '48.86357, 2.33449',
        zoom: 16,
    },
    {
        when: 'February 1845',
        what: '被驱离法国',
        where: 'Brussels',
        latLng: '50.8504500°, 4.3487800°',
        detail: '《前进！》被封，马克思被驱离法国。到 Brussels 后，马克思写了《费尔巴哈提纲》：“哲学家总是用各种方式解释世界，而关键应当是改变世界。”历史唯物主义也发源于此时。布鲁塞尔逐渐聚集起一批流亡的社会主义者。'
    },
    {
        when: 'July 1845',
        what: '访问宪章运动领导人',
        where: 'London & Manchester',
        latLng: '52.5°N, -1°E',
        zoom: 6,
    },
    {
        when: 'August 1845',
        what: '访问结束',
        where: 'Brussels',
        latLng: '50.8504500°, 4.3487800°',
    },
    {
        when: '21 February 1848',
        what: '发表《共产党宣言》',
        where: 'Brussels',
        latLng: '50.8504500°, 4.3487800°',
    },
    {
        when: 'March 1848',
        what: '遣返法国',
        where: 'Paris',
        latLng: '48.863186°N, 2.339754°E',
        detail: '比利时司法部指控马克思支持当地工人革命运动（传言有 2,000 法郎），逮捕并遣返至法国（二月末成立的法兰西第二共和国）。'
    },
    {
        when: 'March 1848',
        what: '发展德国革命',
        where: 'Cologne',
        latLng: '50°56′11″N 6°57′10″E',
        detail: '马克思希望革命扩展到德国，搬回 Cologne，提出德国需要资产阶级先推翻封建君主、贵族，然后无产阶级才能推翻资产阶级。六月马克思创办了日报<cite lang="de">Neue Rheinische Zeitung</cite>，并面临多次指控，不过最终都宣判无罪。'
    },
    {
        when: '16 May 1848',
        what: '被要求离开德国',
        where: 'Paris',
        latLng: '48.863186°N, 2.339754°E',
        detail: '普鲁士议会被 Frederick William IV 取代，<cite lang="de">Neue Rheinische Zeitung</cite>被封，马克思被要求离开德国。',
    },
    {
        when: 'June 1849',
        what: '避难伦敦',
        where: 'London',
        latLng: '51°30′30.71″N, 0°7′32.66″E',
        detail: '此时保守派控制巴黎，认为马克思是政治威胁，因此驱逐其出境。此时 Jenny von Westphalen 将生下第四个孩子，因此没办法返回德国或比利时，只好避难伦敦。在伦敦，马克思意识到工人阶级应当联合资产阶级中的进步力量，一同反对封建贵族。',
    },
    {
        when: '21 August 1852',
        what: '开始在<cite lang="en">New-York Daily Tribune</cite>发表文章',
        where: 'London',
        latLng: '51°30′30.71″N, 0°7′32.66″E',
    },
    {
        when: '1859',
        what: '发表《政治经济学批判》',
        where: 'London',
        latLng: '51°30′30.71″N, 0°7′32.66″E',
    },
    {
        when: '1864',
        what: '参加第一国际',
        where: 'London',
        latLng: '51°30′30.71″N, 0°7′32.66″E',
    },
    {
        when: '1867',
        what: '发表《资本论》（<cite lang="de">Das Kapital</cite>）第一卷',
        where: 'London',
        latLng: '51°30′30.71″N, 0°7′32.66″E',
    },
    {
        when: '14 March 1883',
        what: '死亡',
        where: 'Highgate Cemetery',
        latLng: '51.565652, -0.143725',
        zoom: 16,
        detail: '死于支气管炎、胸膜炎。17日葬于 Highgate 公墓。',
    },
    {
        when: 'November 1954',
        what: '重新下葬',
        where: 'Highgate Cemetery',
        latLng: '51.566169, -0.143757',
        zoom: 18,
        detail: "新墓在旧墓附近。墓碑：<blockquote lang='en'>WORKERS OF ALL LANDS<br>UNITE</blockquote>",
    },

];

/**
 * 解析形如'06°38′29″'的字符串
 * @detail 不会判断是否合法，不合法时也可能返回数值。
 * @param {string} angle_str 
 * @returns {number}
 */
function parse_angle(angle_str) {
    const parts = angle_str.split(/[°′″]/);
    return parts.reduce((sum, part, index) => {
        return sum + Number(part) * (60 ** (-index));
    }, 0);
}
/**
 * 解析形如'49°45′24″N 06°38′29″E'的经纬度字符串
 * @param {string} coord_str 
 * @returns {{lat: number, lng: number}} LatLng
 */
function parse_latLng(coord_str) {
    const match_obj = /^(?<lat>-?[.0-9°′″]+)(?<lat_side>N|S)?,? (?<lng>-?[.0-9°′″]+)(?<lng_side>E|W)?$/.exec(coord_str);
    if (!match_obj) {
        throw `解析经纬度“${coord_str}”失败。`;
    }

    const latLng = {
        lat: parse_angle(match_obj.groups.lat),
        lng: parse_angle(match_obj.groups.lng),
    };

    if (match_obj.groups.lat_side && match_obj.groups.lat_side === 'S')
        latLng.lat *= -1;
    if (match_obj.groups.lng_side && match_obj.groups.lng_side === 'W')
        latLng.lng *= -1;

    return latLng;
}
/**
 * 将季节转换成大致的月份
 * @param {string} date_str 
 * @returns {string}
 */
function translate_season_to_month(date_str) {
    return date_str.replace(/spring/i, 'March')
        .replace(/summer/i, 'June')
        .replace(/(autumn|fall)/i, 'September')
        .replace(/winter/i, 'December');
}

/**
 * 比较经纬度是否接近
 * @param {{lat: number, lng: number}} place1 
 * @param {{lat: number, lng: number}} place2
 * @returns {boolean}
 */
function is_near(place1, place2) {
    let ret = true;
    for (const key of ['lat', 'lng'])
        ret = ret && Math.abs(place1[key] - place2[key]) < 2e-2;
    return ret;
}
/**
 * 比较经纬度是否相等
 * @param {{lat: number, lng: number}} place1 
 * @param {{lat: number, lng: number}} place2
 * @returns {boolean}
 */
function is_same_place(place1, place2) {
    let ret = true;
    for (const key of ['lat', 'lng'])
        ret = ret && Math.abs(place1[key] - place2[key]) < 1e-6;
    return ret;
}

class Point {
    constructor({ when, what = null, where, latLng, detail = null, zoom = 10 }) {
        this.when_text = when instanceof Date ?
            when.toLocaleDateString() :
            when?.toString();

        if (typeof when === 'string')
            when = new Date(translate_season_to_month(when));
        if (typeof latLng === 'string')
            latLng = parse_latLng(latLng);

        /** 日期
         * @type Date */
        this.when = when;
        /** 事件描述
         * @type string */
        this.what = what;
        /** 地点的描述
         * @type string */
        this.where = where;
        /** 经纬度坐标
         * @type {{lat: number, lng: number}} */
        this.latLng = latLng;
        /** 显示时的默认缩放级别
         * @type {number} */
        this.zoom = zoom;
        /** 详细描述
         * @type string */
        this.detail = detail;

        /** L.marker */
        this.marker = null;
        /** L.popup */
        this.popup = null;
    }

    /**
     * `<time>`元素
     * @returns {string}
     */
    _to_time_element() {
        return `<time datetime=${this.when.toISOString()}>${this.when_text}</time>`;
    }

    /**
     * 不与其它`Point`重复的 Hash
     * @returns {string}
     * @description 不含“#”。由时空坐标生成，因此不能有重复的时空坐标。
     */
    to_hash() {
        return `${this.when.toISOString()}-${this.where}F`;
    }

    /**
     * 用于 popup 的简短 HTML
     * @returns {string}
     */
    toString() {
        return `<p class='when'>${this._to_time_element()}</p>` +
            `<h4 class='where'>${this.where}</h4>` +
            (this.what ? `<p class='what'>${this.what}</p>` : '');
    }

    /**
     * 详细内容，包裹在`<article>`中
     * @param {{with_hash?: boolean}} param0  with_hash：是否设置 id 为 hash
     * @returns {string}
     */
    to_article({ with_hash = false } = {}) {
        let article = with_hash ? `<article id='${this.to_hash()}'>` : '<article>';
        article += `<hgroup>
                        <p class='when'>${this._to_time_element()}</p>
                        <h4 class='where'>${this.where}</h4>
                    </hgroup>`;
        if (this.what || this.detail) {
            article += '<p>';
            if (this.what)
                article += `<span class='what'>${this.what}</span>`;
            if (this.detail)
                article += `<span class='detail'>${this.detail}</span>`;
            article += '</p>';
        }
        article += `</article>`;
        return article;
    }

    /**
     * 标记并添加 popup
     * @param {*} map L.map
     * @returns {*} {marker: L.marker, popup: L.popup}
     */
    mark_on(map) {
        this.marker = L.marker(this.latLng, {
            riseOnHover: true
        }).addTo(map);
        this.popup = this.marker.bindPopup(this.toString());
        return {
            marker: this.marker,
            popup: this.popup
        };
    }

    /**
     * 在地图上查看
     * @param {*} map L.map
     * @returns {Promise<string>} 'finish'
     */
    look_on(map) {
        map.flyTo(this.latLng, this.zoom);
        this.popup?.openPopup();

        return new Promise((resolve, reject) => {
            if (this.zoom !== map.getZoom() || !is_near(this.latLng, map.getCenter())) {
                map.once('zoomend', () => {
                    if (this.zoom !== map.getZoom()) {
                        // 再等等
                        map.once('zoomend', () => resolve('finish'));
                    } else {
                        resolve('finish');
                    }
                });
            } else if (is_same_place(this.latLng, map.getCenter())) {
                // zoom 和 latLng 都一致
                resolve('finish');
            } else {
                map.once('moveend', () => resolve('finish'));
            }
        });
    }

    /**
     * 滚动到 id 为 hash 的元素
     */
    scroll_hash_into_view() {
        const target = document.getElementById(this.to_hash());
        if (!target)
            return;

        target.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        target.classList.add('looking');
        setTimeout(() => {
            target.classList.remove('looking');
        }, 1000);
    }
}

/**
 * @param {number} timeout 
 */
function sleep(timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Wake up!"), timeout);
    });
}

/**
 * 遍历
 * @param {Point[]} track 
 * @param {*} map L.map
 * @param {{delay?: number, final?: {latLng: {lat: number, lng: number}, zoom: number}}} options 每次停留 delay 毫秒；遍历结束后显示 final。
 */
async function travel(track, map, options) {
    const { delay = 2000, final } = options;

    for (const point of track) {
        point.scroll_hash_into_view();
        await point.look_on(map);
        await sleep(delay);
    }

    if (final) {
        await (new Point(final)).look_on(map);
    }
}



/// 初始化地图

const map = L.map('map').setView([0, 0], 10);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoieS1kLXgtIiwiYSI6ImNrcnhtdTM1dDBzYTgycG50NHFmazRiOWgifQ.87PPVdI0Errn0chlRZIvCw'
}).addTo(map);

const center = { latLng: { lat: 51, lng: 6 }, zoom: 6 };
const track = data.filter(point => point.when.length > 0)
    .map(point => new Point(point));

const marks = track.map(point => point.mark_on(map));
L.polyline(track.map(p => p.latLng), { color: 'red' }).addTo(map);

map.setView(center.latLng, center.zoom);


/// Controls

/**
 * 给 #controls 添加交互功能
 * @param {{map: *, marks: *, track: Point[], center: {latLng: {lat:number,lng:number}, zoom: number}}} param0 
 */
function interact({ map, marks, track, center }) {
    /** 正在展示的点
     * @type {number|null} */
    let current_index = null;
    const [play_all_btn, prev_btn, next_btn, reset_btn] = ['#play-all', '#prev', '#next', "#reset"]
        .map(s => document.querySelector(s));

    function set_all_buttons_disabled(disabled) {
        play_all_btn.disabled = prev_btn.disabled =
            next_btn.disabled = reset_btn.disabled = disabled;
    }
    function update_prev_next() {
        prev_btn.disabled = current_index === 0;
        next_btn.disabled = current_index === track.length - 1;
    }

    play_all_btn.addEventListener('click', async () => {
        current_index = null;

        set_all_buttons_disabled(true);
        await travel(track, map, { final: center });
        set_all_buttons_disabled(false);
    });
    prev_btn.addEventListener('click', async () => {
        if (current_index === null)
            current_index = track.length;
        current_index--;

        set_all_buttons_disabled(true);
        track[current_index].scroll_hash_into_view();
        await track[current_index].look_on(map);
        set_all_buttons_disabled(false);

        update_prev_next();
    });
    next_btn.addEventListener('click', async () => {
        if (current_index === null)
            current_index = -1;
        current_index++;

        set_all_buttons_disabled(true);
        track[current_index].scroll_hash_into_view();
        await track[current_index].look_on(map);
        set_all_buttons_disabled(false);

        update_prev_next();
    });
    reset_btn.addEventListener('click', () => {
        if (current_index !== null) {
            track[current_index].popup.closePopup();
            current_index = null;
        }
        set_all_buttons_disabled(false);
        map.setView(center.latLng, center.zoom);
    });

    marks.forEach(({ marker }, index) => {
        marker.on('click', () => {
            current_index = index;
            update_prev_next();
            track[index].scroll_hash_into_view();
        });
    });
}
interact({ map, marks, track, center });

/// 时间轴

/**
 * 给时间轴添加内容
 * @param {Point[]} track 
 */
function append_content_to_timeline(track) {
    const timeline = document.querySelector('#timeline');
    for (const point of track) {
        const li = document.createElement('li');
        li.innerHTML = point.to_article({ with_hash: true });
        timeline.appendChild(li);
    }
}
append_content_to_timeline(track);
