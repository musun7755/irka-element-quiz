// Columns: Traditional Chinese source, English, Japanese, Korean.
const TRANSLATIONS = [
  [
    "金",
    "Metal",
    "金",
    "금속"
  ],
  [
    "說好要守的，就守到最後",
    "You keep your promises to the very end.",
    "守ると決めたら、最後まで",
    "지키겠다고 했으면 끝까지"
  ],
  [
    "你相信能握在手裡的東西。答應過的事你不會反悔，想要的你會一錘一錘打出來。聚落裡最靠得住的那面牆，常常就是你。",
    "You trust what you can hold in your hands. You keep your word and hammer out what you want, one strike at a time. More often than not, you are the wall everyone in the settlement can rely on.",
    "手に取れるものを信じるあなた。一度した約束は曲げず、欲しいものは一打ちずつ、自分の手で形にする。集落でいちばん頼れる壁は、きっとあなたのこと。",
    "당신은 손에 쥘 수 있는 것을 믿어요. 한 번 한 약속은 지키고, 원하는 것은 망치를 두드리듯 하나씩 만들어 내죠. 정착지에서 모두가 믿고 기댈 수 있는 벽은, 대개 당신이에요."
  ],
  [
    "握住鐵管的那一刻，你摸得到金屬裡的紋路。",
    "The moment you gripped the iron pipe, you could feel the grain within the metal.",
    "鉄の棒を握った瞬間、金属の内側を走る筋まで感じ取れた。",
    "쇠파이프를 움켜쥔 순간, 금속 안쪽의 결이 느껴졌어요."
  ],
  [
    "控金",
    "Metal Control",
    "金属操作",
    "금속 조작"
  ],
  [
    "凝出金屬或操控身邊的金屬，熟練可以改變形狀與硬度",
    "Create metal or control nearby metal. With practice, alter its shape and hardness.",
    "金属を生み出し、周囲の金属を操る。熟練すれば形や硬さも変えられる",
    "금속을 만들어 내거나 주변 금속을 조종한다. 숙련되면 형태와 경도도 바꿀 수 있다"
  ],
  [
    "硬化",
    "Harden",
    "硬化",
    "경화"
  ],
  [
    "讓皮膚或武器硬得像鋼鐵",
    "Make skin or a weapon as hard as steel.",
    "皮膚や武器を鋼のように硬くする",
    "피부나 무기를 강철처럼 단단하게 만든다"
  ],
  [
    "鍛造",
    "Forge",
    "鍛造",
    "단조"
  ],
  [
    "不用爐火，直接把金屬捏成工具",
    "Shape metal into tools without a furnace.",
    "炉を使わず、金属を直接こねて道具にする",
    "용광로 없이 금속을 주물러 도구로 만든다"
  ],
  [
    "鉤索",
    "Grappling Hook",
    "鉤縄",
    "갈고리 줄"
  ],
  [
    "把金屬拉成長鉤，盪到高處",
    "Stretch metal into a long hook and swing to higher ground.",
    "金属を長い鉤に変え、高い場所へ飛び移る",
    "금속을 긴 갈고리로 늘려 높은 곳으로 이동한다"
  ],
  [
    "金屬刃",
    "Metal Blade",
    "金属刃",
    "금속 칼날"
  ],
  [
    "把手邊的金屬拉成一把利刃",
    "Draw nearby metal into a sharp blade.",
    "手元の金属を引き延ばし、鋭い刃にする",
    "주변 금속을 늘려 날카로운 칼날로 만든다"
  ],
  [
    "迴旋刃",
    "Returning Blade",
    "回転刃",
    "회전 칼날"
  ],
  [
    "甩出一片圓刃，會繞回手中",
    "Throw a circular blade that returns to your hand.",
    "投げると手元に戻る円形の刃を放つ",
    "던지면 손으로 돌아오는 원형 칼날을 날린다"
  ],
  [
    "鐵盾",
    "Iron Shield",
    "鉄盾",
    "철 방패"
  ],
  [
    "金屬在身前展開成盾，擋下撲擊",
    "Unfurl a metal shield before you to block a lunge.",
    "目の前に金属の盾を広げ、飛びかかる敵を防ぐ",
    "눈앞에 금속 방패를 펼쳐 돌진을 막는다"
  ],
  [
    "鐵刺",
    "Iron Spikes",
    "鉄棘",
    "철 가시"
  ],
  [
    "從地面或金屬表面刺出尖銳鐵刺",
    "Drive sharp iron spikes out of the ground or a metal surface.",
    "地面や金属の表面から鋭い鉄の棘を突き出す",
    "땅이나 금속 표면에서 날카로운 철 가시를 솟게 한다"
  ],
  [
    "磁吸",
    "Magnetic Pull",
    "磁力吸引",
    "자력 흡인"
  ],
  [
    "把附近的金屬吸到手邊",
    "Pull nearby metal into your hand.",
    "近くの金属を手元に引き寄せる",
    "주변 금속을 손으로 끌어당긴다"
  ],
  [
    "鋼針",
    "Steel Needles",
    "鋼針",
    "강철 바늘"
  ],
  [
    "射出細長鋼針，專刺甲殼的縫隙",
    "Fire slender steel needles into gaps in armor.",
    "細い鋼の針を放ち、甲殻の隙間を狙う",
    "가느다란 강철 바늘을 쏘아 갑각의 틈을 찌른다"
  ],
  [
    "金屬鞭",
    "Metal Whip",
    "金属鞭",
    "금속 채찍"
  ],
  [
    "把金屬拉成長鞭，能抽打也能纏住",
    "Stretch metal into a whip for striking or binding.",
    "金属を長い鞭に変え、打ちつけたり絡め取ったりする",
    "금속을 긴 채찍으로 늘려 때리거나 휘감는다"
  ],
  [
    "水",
    "Water",
    "水",
    "물"
  ],
  [
    "最冷靜的那一個",
    "The calm one.",
    "誰よりも冷静",
    "누구보다 침착한 사람"
  ],
  [
    "你很少慌。別人吵成一團的時候，你已經在想下一步。你能包容很多事，可是被逼到底線，你會冷得像結了冰。",
    "You rarely panic. While everyone else argues, you are already thinking ahead. You can put up with a great deal, but push you too far and you turn cold as ice.",
    "あなたはめったに慌てない。周りが言い争っている間に、もう次の手を考えている。たいていのことは受け止められるけれど、一線を越えられると氷のように冷たくなる。",
    "당신은 좀처럼 당황하지 않아요. 다른 사람들이 다투는 동안 벌써 다음 수를 생각하죠. 많은 것을 받아 줄 수 있지만, 한계를 넘어서면 얼음처럼 차가워져요."
  ],
  [
    "渴到快撐不住的那天，你的掌心滲出了乾淨的水。",
    "On the day thirst nearly broke you, clean water seeped from your palm.",
    "渇きに耐えきれなくなった日、手のひらから澄んだ水がにじみ出た。",
    "갈증에 더는 버틸 수 없던 날, 손바닥에서 깨끗한 물이 배어 나왔어요."
  ],
  [
    "控水",
    "Water Control",
    "水操作",
    "물 조작"
  ],
  [
    "凝出水或操控身邊的水，熟練可以改變形態與溫度",
    "Create water or control nearby water. With practice, alter its state and temperature.",
    "水を生み出し、周囲の水を操る。熟練すれば状態や温度も変えられる",
    "물을 만들어 내거나 주변 물을 조종한다. 숙련되면 상태와 온도도 바꿀 수 있다"
  ],
  [
    "淨水",
    "Purify",
    "浄水",
    "정수"
  ],
  [
    "讓髒水變得能喝",
    "Make dirty water safe to drink.",
    "汚れた水を飲めるようにする",
    "더러운 물을 마실 수 있게 정화한다"
  ],
  [
    "凍結",
    "Freeze",
    "凍結",
    "동결"
  ],
  [
    "讓水或敵人的腳瞬間結冰",
    "Instantly freeze water or an enemy's feet.",
    "水や敵の足を一瞬で凍らせる",
    "물이나 적의 발을 순식간에 얼린다"
  ],
  [
    "水刃",
    "Water Blade",
    "水刃",
    "물 칼날"
  ],
  [
    "把水壓成細流，切開皮肉",
    "Compress water into a thin jet that cuts through flesh.",
    "水を細く圧縮し、肉を切り裂く",
    "물을 가느다란 줄기로 압축해 살을 벤다"
  ],
  [
    "冰牆",
    "Ice Wall",
    "氷壁",
    "얼음벽"
  ],
  [
    "立起一道冰牆擋住攻擊",
    "Raise a wall of ice to block attacks.",
    "氷の壁を立て、攻撃を防ぐ",
    "얼음벽을 세워 공격을 막는다"
  ],
  [
    "霧氣",
    "Mist",
    "霧",
    "안개"
  ],
  [
    "放出濃霧，遮住敵人的視線",
    "Release thick mist to obscure an enemy's sight.",
    "濃い霧を放ち、敵の視界を遮る",
    "짙은 안개를 퍼뜨려 적의 시야를 가린다"
  ],
  [
    "冰行",
    "Ice Glide",
    "氷滑り",
    "얼음 활주"
  ],
  [
    "腳下凝出冰面，滑行前進，經過的地方留下一道冰",
    "Form ice beneath your feet and glide forward, leaving an icy trail.",
    "足元に氷を作って滑走し、通った場所に氷の道を残す",
    "발밑에 얼음을 만들어 미끄러져 나아가며 얼음길을 남긴다"
  ],
  [
    "水牢",
    "Water Prison",
    "水牢",
    "물 감옥"
  ],
  [
    "把敵人困在一團水球裡",
    "Trap an enemy inside a sphere of water.",
    "水の球の中に敵を閉じ込める",
    "적을 물구슬 안에 가둔다"
  ],
  [
    "火",
    "Fire",
    "火",
    "불"
  ],
  [
    "先衝再說",
    "Act first. Think later.",
    "考えるより先に飛び出す",
    "일단 뛰어들고 본다"
  ],
  [
    "你的情緒來得快，去得也快。你會第一個衝出去，也會第一個把凍僵的人拉到火邊。末日裡，總要有人把火點起來。",
    "Your feelings flare up quickly and fade just as fast. You are the first to charge ahead, and the first to pull someone frozen stiff toward the fire. In a broken world, someone has to get the flames going.",
    "感情が燃え上がるのも、静まるのも早いあなた。真っ先に飛び出すし、凍えた人を火のそばへ連れてくるのもいちばん。終末の世界でも、誰かが火を灯さなくちゃ。",
    "당신은 감정이 솟는 것도, 가라앉는 것도 빨라요. 누구보다 먼저 뛰어나가고, 얼어붙은 사람을 불가로 데려오는 것도 가장 먼저죠. 세상이 무너져도 누군가는 불을 피워야 하니까요."
  ],
  [
    "那晚很冷，你只是想讓身邊的人暖一點。",
    "That night was bitterly cold. All you wanted was to keep the people beside you warm.",
    "ひどく寒い夜だった。ただ、そばにいる人を暖めたかった。",
    "그날 밤은 몹시 추웠어요. 그저 곁에 있는 사람을 조금 따뜻하게 해 주고 싶었을 뿐이에요."
  ],
  [
    "控火",
    "Fire Control",
    "火操作",
    "불 조작"
  ],
  [
    "生出火或操控身邊的火，可以改變燃點與方向",
    "Create fire or control nearby flames, changing where they ignite and spread.",
    "火を生み出し、周囲の炎を操る。発火する場所や進む方向を変えられる",
    "불을 만들어 내거나 주변 불을 조종해 발화 지점과 방향을 바꾼다"
  ],
  [
    "點燃",
    "Ignite",
    "着火",
    "점화"
  ],
  [
    "讓碰到的東西起火",
    "Set whatever you touch on fire.",
    "触れたものに火をつける",
    "닿은 물체에 불을 붙인다"
  ],
  [
    "加熱",
    "Heat",
    "加熱",
    "가열"
  ],
  [
    "讓物體升溫，能把鐵燒到發紅",
    "Heat an object until even iron glows red.",
    "物体を熱し、鉄さえ赤く焼ける温度にする",
    "물체를 달궈 철까지 붉게 달아오르게 한다"
  ],
  [
    "火球",
    "Fireball",
    "火球",
    "화염구"
  ],
  [
    "擲出火球，撞上時炸開",
    "Hurl a fireball that bursts on impact.",
    "命中すると爆ぜる火の玉を投げる",
    "부딪히면 폭발하는 불덩이를 던진다"
  ],
  [
    "火牆",
    "Fire Wall",
    "火壁",
    "화염벽"
  ],
  [
    "在地上燃起一道火牆，擋住去路",
    "Raise a wall of flame across the ground to block a path.",
    "地面に炎の壁を立て、進路を塞ぐ",
    "땅에 불길의 벽을 세워 길을 막는다"
  ],
  [
    "附火",
    "Flame Coat",
    "炎纏い",
    "화염 부여"
  ],
  [
    "讓武器纏上火焰",
    "Wrap your weapon in flame.",
    "武器に炎をまとわせる",
    "무기에 불꽃을 두른다"
  ],
  [
    "爆焰",
    "Flame Burst",
    "爆炎",
    "폭염"
  ],
  [
    "在近距離引爆一團烈火",
    "Detonate a burst of fierce fire at close range.",
    "至近距離で激しい炎を爆発させる",
    "가까운 거리에서 거센 화염을 폭발시킨다"
  ],
  [
    "火蛇",
    "Fire Serpent",
    "火蛇",
    "불뱀"
  ],
  [
    "火焰化成蛇形，追著目標咬",
    "Shape flame into a serpent that pursues and bites its target.",
    "炎を蛇の形に変え、標的を追わせて噛みつかせる",
    "불꽃을 뱀으로 만들어 대상을 쫓아 물게 한다"
  ],
  [
    "燎原",
    "Wildfire",
    "燎原",
    "들불"
  ],
  [
    "火沿著地面一路蔓延，燒向目標",
    "Send fire racing along the ground toward your target.",
    "地面を伝う炎を広げ、標的へ走らせる",
    "땅을 따라 불길을 퍼뜨려 대상을 덮친다"
  ],
  [
    "火種",
    "Ember Trap",
    "火種",
    "불씨 덫"
  ],
  [
    "留下一點火星，敵人靠近時炸開",
    "Leave an ember that explodes when an enemy approaches.",
    "敵が近づくと爆ぜる火種を残す",
    "적이 다가오면 폭발하는 불씨를 남긴다"
  ],
  [
    "雷",
    "Lightning",
    "雷",
    "번개"
  ],
  [
    "腦子轉得比誰都快",
    "Always a thought ahead.",
    "誰よりも頭の回転が速い",
    "누구보다 빠른 두뇌 회전"
  ],
  [
    "你一眼就看得出哪裡不對勁，手比嘴還快。舊時代的機器到你手上會重新動起來，怪物撲過來時，你也總是最先反應的那個。",
    "You spot what is wrong at a glance, and your hands move faster than your mouth. Old-world machines come alive in your care, and when a monster lunges, you are always the first to react.",
    "おかしなところを一目で見抜き、口より先に手が動くあなた。旧時代の機械も、その手にかかれば動き出す。怪物が飛びかかってきても、真っ先に反応するのはあなただ。",
    "당신은 무엇이 잘못됐는지 한눈에 알아차리고, 말보다 손이 먼저 움직여요. 옛 시대의 기계도 당신 손에서 다시 살아나죠. 괴물이 덮쳐 올 때도 늘 가장 먼저 반응해요."
  ],
  [
    "指尖碰到斷掉的電線，整間屋子的燈亮了。",
    "Your fingertip touched a broken wire, and every light in the house came on.",
    "切れた電線に指先が触れた途端、家中の明かりが灯った。",
    "끊어진 전선에 손끝이 닿자 집 안의 모든 불이 켜졌어요."
  ],
  [
    "控雷",
    "Lightning Control",
    "雷操作",
    "번개 조작"
  ],
  [
    "在指間生出電流，或操控身邊的電，改變它的去向",
    "Generate current at your fingertips or redirect electricity around you.",
    "指先に電流を生み出し、周囲の電気の流れを操る",
    "손끝에 전류를 만들거나 주변 전기의 흐름을 바꾼다"
  ],
  [
    "麻痺",
    "Paralyze",
    "麻痺",
    "마비"
  ],
  [
    "電流讓目標短暫動彈不得",
    "Use an electric current to briefly immobilize a target.",
    "電流で標的を短時間動けなくする",
    "전류로 대상을 잠시 움직이지 못하게 한다"
  ],
  [
    "供電",
    "Power Supply",
    "給電",
    "전력 공급"
  ],
  [
    "替舊時代的機器重新通電",
    "Restore power to old-world machines.",
    "旧時代の機械に再び電気を通す",
    "옛 시대의 기계에 다시 전기를 공급한다"
  ],
  [
    "電擊",
    "Electric Shock",
    "電撃",
    "전격"
  ],
  [
    "觸碰的瞬間放出強電",
    "Release a powerful shock on contact.",
    "触れた瞬間、強い電流を放つ",
    "접촉하는 순간 강한 전류를 방출한다"
  ],
  [
    "雷鞭",
    "Lightning Whip",
    "雷鞭",
    "번개 채찍"
  ],
  [
    "把雷電拉成長鞭抽打",
    "Stretch lightning into a whip and lash your target.",
    "雷を長い鞭に変えて打ちつける",
    "번개를 긴 채찍으로 만들어 휘두른다"
  ],
  [
    "閃光",
    "Flash",
    "閃光",
    "섬광"
  ],
  [
    "爆出強光，讓敵人短暫失明",
    "Release a bright flash that briefly blinds enemies.",
    "強い光を放ち、敵の目を一瞬くらませる",
    "강한 빛을 터뜨려 적의 눈을 잠시 멀게 한다"
  ],
  [
    "落雷",
    "Lightning Strike",
    "落雷",
    "낙뢰"
  ],
  [
    "在小範圍內落下一道雷擊",
    "Call down a bolt of lightning over a small area.",
    "狭い範囲に雷を落とす",
    "좁은 범위에 벼락을 떨어뜨린다"
  ],
  [
    "雷槍",
    "Lightning Spear",
    "雷槍",
    "번개 창"
  ],
  [
    "雷電凝成長槍，擲出貫穿",
    "Form a spear of lightning and hurl it through a target.",
    "雷を槍に凝縮し、投げて標的を貫く",
    "번개를 창으로 응축해 던져 대상을 관통한다"
  ],
  [
    "連鎖",
    "Chain Lightning",
    "連鎖",
    "연쇄 번개"
  ],
  [
    "電流在相鄰的敵人之間跳躍",
    "Send current jumping between nearby enemies.",
    "隣り合う敵の間を電流が跳ね渡る",
    "가까이 있는 적들 사이로 전류가 옮겨 간다"
  ],
  [
    "電療",
    "Electrotherapy",
    "電療",
    "전기 치유"
  ],
  [
    "微弱電流讓痠痛與麻木退去",
    "Ease aches and numbness with a gentle current.",
    "微弱な電流で痛みやしびれを和らげる",
    "미약한 전류로 통증과 저림을 가라앉힌다"
  ],
  [
    "地",
    "Earth",
    "地",
    "대지"
  ],
  [
    "把荒地守成家的人",
    "You turn wasteland into home.",
    "荒れ地を守り、故郷に変える",
    "황무지를 지켜 집으로 만드는 사람"
  ],
  [
    "你不急。你會挑一塊地，蓋牆、開田、種下麵根，一年一年把它守成家。身邊的人來來去去，你一直都在。",
    "You are in no hurry. You choose a patch of ground, raise walls, till fields, and plant breadroot. Year after year, you make it home. People come and go. You remain.",
    "あなたは急がない。土地を選び、壁を築き、畑を耕し、麺根を植える。何年もかけて、そこを故郷にしていく。周りの人が行き来しても、あなたはずっとそこにいる。",
    "당신은 서두르지 않아요. 땅을 고르고 벽을 세우고 밭을 갈아 빵뿌리를 심죠. 해마다 그곳을 지키며 집으로 만들어 가요. 사람들이 오고 가도, 당신은 늘 그 자리에 있어요."
  ],
  [
    "獸潮那一夜，你跪在泥裡，牆從你腳下長了出來。",
    "On the night of the Beast Tide, you knelt in the mud, and a wall rose beneath your feet.",
    "獣潮の夜、泥の中に膝をつくと、足元から壁がせり上がった。",
    "야수의 파도가 밀려오던 밤, 진흙 속에 무릎을 꿇자 발밑에서 벽이 솟아올랐어요."
  ],
  [
    "控土",
    "Earth Control",
    "土操作",
    "흙 조작"
  ],
  [
    "凝出土石或操控身邊的土石，讓它隆起、塌陷、移動",
    "Create or control nearby earth and stone, making it rise, collapse, or move.",
    "土や石を生み出し、周囲の土石を隆起、陥没、移動させる",
    "흙과 돌을 만들거나 주변의 것을 조종해 솟거나 무너지거나 움직이게 한다"
  ],
  [
    "築牆",
    "Raise Wall",
    "築壁",
    "벽 세우기"
  ],
  [
    "從地面立起一道土牆",
    "Raise an earthen wall from the ground.",
    "地面から土の壁を立ち上げる",
    "땅에서 흙벽을 솟게 한다"
  ],
  [
    "耕地",
    "Till",
    "耕地",
    "경작"
  ],
  [
    "一揮手，翻鬆整片田",
    "Loosen an entire field with a wave of your hand.",
    "一振りで畑一面の土を耕す",
    "손짓 한 번으로 밭 전체의 흙을 부드럽게 간다"
  ],
  [
    "催生植物",
    "Rapid Growth",
    "植物促進",
    "식물 성장"
  ],
  [
    "讓植物在幾息之間長大",
    "Make plants grow within a few breaths.",
    "数呼吸の間に植物を育てる",
    "몇 번 숨 쉬는 사이에 식물을 자라게 한다"
  ],
  [
    "地刺",
    "Stone Spikes",
    "地棘",
    "돌 가시"
  ],
  [
    "腳下的地面竄出石刺",
    "Send stone spikes bursting up from the ground.",
    "足元の地面から石の棘を突き出す",
    "발밑의 땅에서 돌 가시를 솟게 한다"
  ],
  [
    "流沙",
    "Quicksand",
    "流砂",
    "유사"
  ],
  [
    "讓敵人腳下的地面變成流沙",
    "Turn the ground beneath enemies into quicksand.",
    "敵の足元を流砂に変える",
    "적의 발밑을 빠져드는 모래로 바꾼다"
  ],
  [
    "石膚",
    "Stone Skin",
    "石膚",
    "돌 피부"
  ],
  [
    "皮膚覆上一層岩石，抵擋攻擊",
    "Coat your skin in rock to withstand attacks.",
    "皮膚を岩で覆い、攻撃に耐える",
    "피부를 바위로 덮어 공격을 견딘다"
  ],
  [
    "岩槍",
    "Stone Spear",
    "岩槍",
    "바위 창"
  ],
  [
    "岩石凝成長槍，擲向目標",
    "Form a spear of rock and hurl it at a target.",
    "岩を槍に変え、標的へ投げる",
    "바위를 창으로 만들어 대상에게 던진다"
  ],
  [
    "震地",
    "Ground Slam",
    "震地",
    "지면 강타"
  ],
  [
    "重重一踏，震倒周圍的敵人",
    "Stomp hard enough to knock down nearby enemies.",
    "力強く踏み込み、周囲の敵を転ばせる",
    "땅을 세게 밟아 주변 적을 넘어뜨린다"
  ],
  [
    "荊棘纏繞",
    "Binding Thorns",
    "荊棘縛り",
    "가시덩굴 속박"
  ],
  [
    "催生荊棘，把敵人纏住",
    "Grow thorny vines to bind an enemy.",
    "荊を生やし、敵を絡め取る",
    "가시덩굴을 자라게 해 적을 묶는다"
  ],
  [
    "風",
    "Wind",
    "風",
    "바람"
  ],
  [
    "停不下來",
    "You were never meant to stay still.",
    "じっとしていられない",
    "멈출 수 없는 사람"
  ],
  [
    "你最討厭被困住。地圖上空白的地方你都想去看看，探路、送信、獨自上路，你總是走得最遠。想找你，得先追得上你。",
    "You hate being trapped. Every blank space on the map calls to you. Scouting, delivering messages, setting out alone—you always go the farthest. Anyone looking for you had better keep up.",
    "閉じ込められるのが何より嫌いなあなた。地図の空白は、どこでも見に行きたい。偵察も、伝言も、一人旅も、いちばん遠くまで行くのはあなた。探すなら、まず追いつかなくちゃ。",
    "당신은 갇히는 것을 가장 싫어해요. 지도의 빈 곳은 어디든 가 보고 싶죠. 정찰이든 전령 일이든 혼자 떠나는 길이든, 늘 가장 멀리까지 가요. 당신을 찾으려면 먼저 따라잡아야 해요."
  ],
  [
    "被怪物逼到懸崖邊，你跳了下去，風接住了你。",
    "Cornered by a monster at a cliff's edge, you jumped—and the wind caught you.",
    "怪物に崖際まで追い詰められ、飛び降りた。風があなたを受け止めた。",
    "괴물에게 절벽 끝까지 몰린 당신은 뛰어내렸고, 바람이 받아 주었어요."
  ],
  [
    "控風",
    "Wind Control",
    "風操作",
    "바람 조작"
  ],
  [
    "生出氣流或操控身邊的風，讓風聽你的",
    "Create air currents or command the wind around you.",
    "気流を生み出し、周囲の風を思いのままに操る",
    "기류를 만들거나 주변 바람을 뜻대로 조종한다"
  ],
  [
    "加速",
    "Accelerate",
    "加速",
    "가속"
  ],
  [
    "風推著你，跑得比誰都快",
    "Let the wind propel you faster than anyone else.",
    "風に押され、誰よりも速く走る",
    "바람의 힘으로 누구보다 빠르게 달린다"
  ],
  [
    "風刃",
    "Wind Blade",
    "風刃",
    "바람 칼날"
  ],
  [
    "射出看不見的風刃",
    "Fire an invisible blade of wind.",
    "目に見えない風の刃を放つ",
    "눈에 보이지 않는 바람 칼날을 날린다"
  ],
  [
    "風壓",
    "Wind Pressure",
    "風圧",
    "풍압"
  ],
  [
    "強風把敵人壓倒或推開",
    "Knock enemies down or push them back with strong winds.",
    "強風で敵を押し倒したり、押し戻したりする",
    "강풍으로 적을 쓰러뜨리거나 밀어낸다"
  ],
  [
    "捲風",
    "Whirlwind",
    "旋風",
    "회오리"
  ],
  [
    "在小範圍內捲起旋風",
    "Raise a whirlwind over a small area.",
    "狭い範囲に旋風を起こす",
    "좁은 범위에 회오리바람을 일으킨다"
  ],
  [
    "風槍",
    "Wind Lance",
    "風槍",
    "바람 창"
  ],
  [
    "壓縮空氣，射出能貫穿的一擊",
    "Compress air into a piercing shot.",
    "空気を圧縮し、貫く一撃を放つ",
    "공기를 압축해 관통하는 일격을 쏜다"
  ],
  [
    "氣爆",
    "Air Burst",
    "気爆",
    "공기 폭발"
  ],
  [
    "壓縮空氣後瞬間炸開",
    "Compress air and release it in an instant explosion.",
    "圧縮した空気を一気に爆発させる",
    "압축한 공기를 순식간에 폭발시킨다"
  ],
  [
    "風鎧",
    "Wind Armor",
    "風鎧",
    "바람 갑옷"
  ],
  [
    "身邊纏著氣流，偏開飛來的攻擊",
    "Wrap yourself in currents that deflect incoming attacks.",
    "気流をまとい、飛んでくる攻撃を逸らす",
    "기류를 둘러 날아오는 공격을 빗겨 낸다"
  ],
  [
    "順風",
    "Tailwind",
    "追い風",
    "순풍"
  ],
  [
    "讓同伴的腳步也跟著輕快起來",
    "Lighten your companions' steps with a following wind.",
    "仲間の足取りも軽くする",
    "동료들의 발걸음도 가볍게 해 준다"
  ],
  [
    "浮空",
    "Air Cushion",
    "浮遊",
    "부유"
  ],
  [
    "風托住身體，從高處落下也不會受傷",
    "Let the wind support your body so you can fall safely from heights.",
    "風で体を支え、高所から落ちても怪我をしない",
    "바람으로 몸을 받쳐 높은 곳에서 떨어져도 다치지 않게 한다"
  ],
  [
    "虛空",
    "Void",
    "虚空",
    "공허"
  ],
  [
    "心裡有個沒有底的地方",
    "There is a bottomless place inside you.",
    "心の奥に、底のない場所がある",
    "마음속에 바닥 없는 곳이 있다"
  ],
  [
    "你習慣把東西收起來，包括情緒。平常看不出來，可一旦被逼到極限，連你自己都控制不住。",
    "You are used to putting things away, feelings included. It rarely shows. But once you are pushed to your limit, even you cannot hold it back.",
    "物も感情も、しまい込むことに慣れているあなた。普段は表に出ないけれど、限界まで追い詰められると、自分でも抑えられなくなる。",
    "당신은 감정까지도 안으로 감춰 두는 데 익숙해요. 평소에는 티가 나지 않지만, 한계까지 몰리면 스스로도 억제할 수 없게 되죠."
  ],
  [
    "你一直在忍。直到那一刻，眼前的空氣裂開了。",
    "You had been holding it in for so long. Then the air before you tore open.",
    "ずっと耐えていた。その瞬間、目の前の空気が裂けた。",
    "계속 참고 있었어요. 그 순간, 눈앞의 공기가 찢어졌어요."
  ],
  [
    "開裂口",
    "Open Rift",
    "裂け目生成",
    "균열 열기"
  ],
  [
    "在身邊撕開一道黑色裂口，初期約掌心大",
    "Tear open a black rift nearby. At first, it is about the size of your palm.",
    "そばの空間に黒い裂け目を開く。初期の大きさは手のひらほど",
    "주변 공간에 검은 균열을 연다. 초기 크기는 손바닥 정도다"
  ],
  [
    "收納",
    "Storage",
    "収納",
    "수납"
  ],
  [
    "把無生命的物體收進虛空，活物放進去會窒息",
    "Store inanimate objects in the Void. Living things suffocate inside.",
    "無生物を虚空に収納する。生き物を入れると窒息する",
    "무생물을 공허에 수납한다. 살아 있는 것을 넣으면 질식한다"
  ],
  [
    "切割",
    "Sever",
    "切断",
    "절단"
  ],
  [
    "用裂口邊緣切開甲殼與金屬",
    "Use the edge of a rift to slice through carapace and metal.",
    "裂け目の縁で甲殻や金属を切り裂く",
    "균열의 가장자리로 갑각과 금속을 베어 낸다"
  ],
  [
    "吞擊",
    "Swallow Attack",
    "攻撃吸収",
    "공격 삼키기"
  ],
  [
    "在身前打開虛空，把飛來的攻擊吞進去",
    "Open the Void in front of you to swallow incoming attacks.",
    "目の前に虚空を開き、飛んでくる攻撃を呑み込む",
    "눈앞에 공허를 열어 날아오는 공격을 삼킨다"
  ],
  [
    "射出",
    "Launch",
    "射出",
    "사출"
  ],
  [
    "把收著的東西從虛空高速射出",
    "Fire stored objects out of the Void at high speed.",
    "収納した物を虚空から高速で撃ち出す",
    "수납한 물체를 공허에서 고속으로 발사한다"
  ],
  [
    "陷阱",
    "Pitfall",
    "落とし穴",
    "함정"
  ],
  [
    "在敵人腳下打開虛空，讓牠一腳踩空",
    "Open the Void beneath an enemy's feet and let them fall.",
    "敵の足元に虚空を開き、踏み外させる",
    "적의 발밑에 공허를 열어 헛디디게 한다"
  ],
  [
    "飛刃",
    "Rift Blade",
    "飛刃",
    "균열 칼날"
  ],
  [
    "把裂口甩出去，像一片黑色飛刃",
    "Fling a rift like a black blade.",
    "裂け目を黒い刃のように投げ放つ",
    "균열을 검은 칼날처럼 날린다"
  ],
  [
    "吞噬",
    "Devour",
    "呑噬",
    "포식"
  ],
  [
    "把怪物的半邊身體吞進虛空，讓牠窒息",
    "Swallow half a monster's body into the Void and suffocate it.",
    "怪物の半身を虚空に呑み込み、窒息させる",
    "괴물의 반신을 공허에 삼켜 질식시킨다"
  ],
  [
    "產生黑色虛空，內部漆黑無底，無聲無光",
    "Creates a black Void: bottomless, silent, and utterly without light.",
    "生み出す虚空の内部は底のない暗闇。音も光もない",
    "만들어 낸 검은 공허 안에는 바닥도, 소리도, 빛도 없다"
  ],
  [
    "裂口大小因人而異，初期約掌心大",
    "Rift size varies by person. It starts at roughly palm size.",
    "裂け目の大きさには個人差があり、初期は手のひらほど",
    "균열의 크기는 사람마다 다르며, 처음에는 손바닥 정도다"
  ],
  [
    "只能放無生命的物體，活物會窒息",
    "Only inanimate objects can be stored safely. Living things suffocate.",
    "収納できるのは無生物のみ。生き物は窒息する",
    "무생물만 안전하게 넣을 수 있다. 생물은 질식한다"
  ],
  [
    "最不穩定，情緒激動時虛空可能會失控打開",
    "The most unstable element. Strong emotions may open the Void involuntarily.",
    "最も不安定な元素。感情が高ぶると、意図せず虚空が開くことがある",
    "가장 불안정한 원소다. 감정이 격해지면 공허가 제멋대로 열릴 수 있다"
  ],
  [
    "使用時身體冒冷氣，平時體溫偏低",
    "Cold air seeps from your body during use. Your usual body temperature is low.",
    "使用中は体から冷気が漏れる。普段の体温も低め",
    "사용할 때 몸에서 냉기가 새어 나오며 평소 체온도 낮다"
  ],
  [
    "殘月",
    "Waning Moon",
    "残月",
    "잔월"
  ],
  [
    "守夜的人",
    "You keep watch through the night.",
    "夜を見守る人",
    "밤을 지키는 사람"
  ],
  [
    "你習慣照顧別人，夜越深越清醒。你還記得裂縫降臨前的月亮，也願意替大家把那一點光留下來。",
    "You look after others as naturally as breathing, and grow more alert as the night deepens. You still remember the moon before the Rift, and want to keep a little of its light alive for everyone.",
    "人の世話をするのが当たり前で、夜が深まるほど冴えていくあなた。裂け目が現れる前の月を、今も覚えている。そのわずかな光を、みんなのために残しておきたい。",
    "당신은 다른 사람을 돌보는 데 익숙하고, 밤이 깊어질수록 정신이 맑아져요. 균열이 나타나기 전의 달을 아직 기억하며, 모두를 위해 그 작은 빛을 남겨 두려 하죠."
  ],
  [
    "有人在你懷裡流血。你只想讓血停下來。",
    "Someone was bleeding in your arms. All you wanted was to make it stop.",
    "腕の中で誰かが血を流していた。ただ、その血を止めたかった。",
    "품 안의 누군가가 피를 흘리고 있었어요. 그저 피를 멈추게 하고 싶었어요."
  ],
  [
    "發光照明",
    "Illuminate",
    "照明",
    "발광"
  ],
  [
    "發出銀白冷光，像裂縫降臨前的月光",
    "Give off a cool silver-white light, like moonlight before the Rift.",
    "裂け目が現れる前の月光に似た、銀白色の冷たい光を放つ",
    "균열이 나타나기 전의 달빛 같은 은백색의 차가운 빛을 낸다"
  ],
  [
    "解毒",
    "Detoxify",
    "解毒",
    "해독"
  ],
  [
    "解除毒素",
    "Neutralize toxins.",
    "毒を取り除く",
    "독을 제거한다"
  ],
  [
    "治療",
    "Heal",
    "治療",
    "치유"
  ],
  [
    "讓傷口癒合",
    "Close wounds.",
    "傷を癒やす",
    "상처를 아물게 한다"
  ],
  [
    "灼光",
    "Searing Light",
    "灼光",
    "작열광"
  ],
  [
    "光照灼傷怪物的異變組織",
    "Burn a monster's mutated tissue with light.",
    "光で怪物の変異組織を焼く",
    "빛으로 괴물의 변이 조직을 태운다"
  ],
  [
    "安眠",
    "Slumber",
    "安眠",
    "숙면"
  ],
  [
    "月光籠罩目標，讓牠沉沉睡去",
    "Envelop a target in moonlight and lull them into deep sleep.",
    "標的を月光で包み、深い眠りに誘う",
    "대상을 달빛으로 감싸 깊이 잠들게 한다"
  ],
  [
    "光盾",
    "Light Shield",
    "光盾",
    "빛 방패"
  ],
  [
    "銀光凝成護盾，擋下攻擊",
    "Form a silver shield of light to block attacks.",
    "銀の光を盾に凝縮し、攻撃を防ぐ",
    "은빛을 방패로 응축해 공격을 막는다"
  ],
  [
    "月光箭",
    "Moonlight Arrow",
    "月光の矢",
    "달빛 화살"
  ],
  [
    "射出銀白光箭，專傷異變組織",
    "Fire silver-white arrows that harm mutated tissue.",
    "変異組織を傷つける銀白色の矢を放つ",
    "변이 조직을 해치는 은백색 화살을 쏜다"
  ],
  [
    "銀月刃",
    "Silver Crescent",
    "銀月刃",
    "은월도"
  ],
  [
    "月光凝成一把彎刃",
    "Shape moonlight into a curved blade.",
    "月光を湾曲した刃に変える",
    "달빛을 휘어진 칼날로 만든다"
  ],
  [
    "銀白色冷光，像裂縫降臨前的月光",
    "A cool silver-white light, like moonlight before the Rift.",
    "裂け目が現れる前の月光に似た、銀白色の冷たい光",
    "균열이 나타나기 전의 달빛 같은 은백색의 차가운 빛"
  ],
  [
    "光照可以灼傷怪物的異變組織",
    "Its light can burn a monster's mutated tissue.",
    "その光は怪物の変異組織を焼く",
    "그 빛은 괴물의 변이 조직을 태울 수 있다"
  ],
  [
    "治癒技能練到最強依然生命不可逆",
    "Even at its strongest, healing cannot bring the dead back to life.",
    "治癒を極めても、失われた命を取り戻すことはできない",
    "치유를 극한까지 익혀도 죽은 생명을 되돌릴 수는 없다"
  ],
  [
    "夜晚效果較強",
    "Stronger at night.",
    "夜は効果が強まる",
    "밤에 효과가 더 강해진다"
  ],
  [
    "白天易疲勞，夜晚精神好",
    "Easily tired by day, alert and energetic at night.",
    "昼は疲れやすく、夜は元気になる",
    "낮에는 쉽게 피곤해지고 밤에는 기운이 난다"
  ],
  [
    "異化",
    "Mutation",
    "異化",
    "변이"
  ],
  [
    "比怪物更懂怪物",
    "You know monsters better than they know themselves.",
    "怪物よりも怪物を知っている",
    "괴물보다 괴물을 잘 아는 사람"
  ],
  [
    "你靠本能活下來。餓了就吃，痛了就咬回去，身體永遠比腦子先動。有些人怕你，但沒有人想跟你為敵。",
    "You survive on instinct. When hungry, you eat. When hurt, you bite back. Your body always moves before your mind. Some people fear you, but no one wants you as an enemy.",
    "本能で生き延びてきたあなた。腹が減れば食べ、傷つけられれば噛み返す。頭より先に体が動く。怖がる人はいても、敵に回したがる人はいない。",
    "당신은 본능으로 살아남아요. 배고프면 먹고, 아프면 물어뜯어 되갚죠. 몸은 늘 머리보다 먼저 움직여요. 당신을 두려워하는 사람은 있어도 적으로 돌리고 싶은 사람은 없어요."
  ],
  [
    "牠咬住你的那一刻，你也長出了牙。",
    "The moment it sank its teeth into you, you grew fangs of your own.",
    "そいつが噛みついた瞬間、あなたにも牙が生えた。",
    "녀석이 당신을 문 순간, 당신에게도 송곳니가 돋아났어요."
  ],
  [
    "局部異變",
    "Partial Mutation",
    "部分変異",
    "부분 변이"
  ],
  [
    "身體一到兩處異變，可以隨意收放",
    "Mutate one or two parts of your body, changing and reverting at will.",
    "体の一、二か所を変異させ、自在に元へ戻せる",
    "몸의 한두 부위를 변이시키고 자유롭게 되돌린다"
  ],
  [
    "長出爪牙",
    "Fangs and Claws",
    "爪牙",
    "발톱과 송곳니"
  ],
  [
    "長出利爪與尖牙",
    "Grow sharp claws and fangs.",
    "鋭い爪と牙を生やす",
    "날카로운 발톱과 송곳니를 돋게 한다"
  ],
  [
    "強化五感",
    "Heightened Senses",
    "五感強化",
    "감각 강화"
  ],
  [
    "視覺、聽覺、嗅覺大幅提升",
    "Sharpen sight, hearing, and smell dramatically.",
    "視覚、聴覚、嗅覚を大幅に高める",
    "시각·청각·후각을 크게 강화한다"
  ],
  [
    "力量暴增",
    "Strength Surge",
    "怪力",
    "괴력"
  ],
  [
    "短時間內力氣暴漲",
    "Gain a burst of immense strength.",
    "短時間、力を爆発的に高める",
    "짧은 시간 동안 힘이 폭발적으로 강해진다"
  ],
  [
    "快速癒合",
    "Rapid Healing",
    "高速治癒",
    "고속 치유"
  ],
  [
    "傷口癒合得比常人快",
    "Recover from wounds faster than an ordinary person.",
    "普通の人より速く傷が治る",
    "보통 사람보다 상처가 빠르게 아문다"
  ],
  [
    "鱗甲",
    "Scale Armor",
    "鱗甲",
    "비늘 갑옷"
  ],
  [
    "皮膚長出鱗片，擋下刀刃與爪擊",
    "Grow scales that withstand blades and claws.",
    "皮膚に鱗を生やし、刃や爪を防ぐ",
    "피부에 비늘을 돋게 해 칼날과 발톱을 막는다"
  ],
  [
    "骨刺",
    "Bone Spikes",
    "骨棘",
    "뼈 가시"
  ],
  [
    "背部竄出骨刺，刺穿貼身的敵人",
    "Grow spikes from your back to pierce enemies at close range.",
    "背中から骨の棘を突き出し、密着した敵を貫く",
    "등에서 뼈 가시를 뻗어 바짝 붙은 적을 꿰뚫는다"
  ],
  [
    "毒牙",
    "Venomous Fangs",
    "毒牙",
    "독니"
  ],
  [
    "咬擊帶毒，讓目標麻木",
    "Deliver a venomous bite that numbs your target.",
    "毒を含む咬撃で標的をしびれさせる",
    "독이 든 물기로 대상을 마비시킨다"
  ],
  [
    "撕裂",
    "Rend",
    "引き裂き",
    "찢어발기기"
  ],
  [
    "異變的肢體直接撕開目標",
    "Tear straight through a target with mutated limbs.",
    "変異した体の部位で標的を直接引き裂く",
    "변이한 신체 부위로 대상을 직접 찢어 버린다"
  ],
  [
    "只有身體局部異變，不會整個獸化",
    "Only parts of the body mutate. You never transform fully into a beast.",
    "変異するのは体の一部のみ。完全な獣にはならない",
    "몸의 일부만 변이하며 완전히 짐승으로 변하지는 않는다"
  ],
  [
    "異變部位因人而異，手臂、腿、眼或背，每人固定一到兩處",
    "Each person has one or two fixed mutation sites, such as arms, legs, eyes, or back.",
    "変異する部位は腕、脚、目、背中など、人ごとに決まった一、二か所",
    "팔·다리·눈·등처럼 변이 부위는 사람마다 한두 곳으로 정해져 있다"
  ],
  [
    "特徵近似覺醒時接觸過的怪物，例如鱗片、利爪、豎瞳",
    "Traits resemble a monster encountered during awakening: scales, claws, slit pupils, and so on.",
    "鱗、鋭い爪、縦長の瞳など、覚醒時に接触した怪物に似た特徴が現れる",
    "비늘·발톱·세로 동공 등 각성할 때 접촉한 괴물과 비슷한 특징이 나타난다"
  ],
  [
    "可以隨意收放，解除後恢復原狀",
    "You can activate or dismiss the mutation at will, restoring your original form.",
    "自在に変異を出し入れでき、解除すると元の姿に戻る",
    "자유롭게 변이를 드러내거나 거둘 수 있으며 해제하면 원래 모습으로 돌아온다"
  ],
  [
    "食量變大，容易餓",
    "A larger appetite. You get hungry easily.",
    "食欲が増し、お腹が空きやすくなる",
    "식사량이 늘고 쉽게 배가 고파진다"
  ],
  [
    "床頭燈還亮著。",
    "The bedside lamp is still on.",
    "枕元の明かりは、まだついている。",
    "머리맡의 불은 아직 켜져 있다."
  ],
  [
    "這本《裂空的伊爾卡》你追了好幾個晚上，書頁邊角被你折得捲了起來。",
    "You have spent several nights reading Ilka of the Shattered Sky. The corners of its pages are curled from all your dog-ears.",
    "ここ何晩も読み続けている『裂空のイルカ』。何度も折ったページの隅は、すっかり丸まっている。",
    "며칠 밤째 읽고 있는 《갈라진 하늘의 이르카》. 접어 둔 책장 귀퉁이가 돌돌 말려 있다."
  ],
  [
    "你折起來的，多半是哪幾頁？",
    "Which pages do you tend to mark?",
    "あなたが折ったのは、どんな場面が多い？",
    "주로 어떤 장면의 귀퉁이를 접어 두었을까?"
  ],
  [
    "主角一刀劈開怪物甲殼的那幾頁，讀得你手心發燙",
    "The hero cleaving a monster's carapace in one stroke. Reading it makes your palms burn.",
    "主人公が一太刀で怪物の甲殻を割る場面。読んでいると手のひらが熱くなる",
    "주인공이 단칼에 괴물의 갑각을 가르는 장면. 읽다 보면 손바닥이 뜨거워진다"
  ],
  [
    "聚落從一片荒地，一磚一瓦蓋起來的那幾頁",
    "A settlement rising from wasteland, built one brick at a time.",
    "荒れ地に、一つずつ煉瓦を積んで集落を築いていく場面",
    "황무지에 벽돌을 하나씩 쌓아 정착지를 세워 가는 장면"
  ],
  [
    "雙胞胎在小屋裡拌嘴，搶最後一塊餅的那幾頁",
    "The twins bickering in their cabin over the last piece of flatbread.",
    "小屋で双子が言い合いながら、最後の薄焼きパンを取り合う場面",
    "쌍둥이가 오두막에서 티격태격하며 마지막 빵 한 조각을 다투는 장면"
  ],
  [
    "有人提起裂縫的另一頭是什麼，話卻總說到一半的那幾頁",
    "Someone asking what lies beyond the Rift, only for the answer to trail off.",
    "裂け目の向こうに何があるのか、誰かが話しかけては途中で口をつぐむ場面",
    "누군가 균열 너머에 무엇이 있는지 말하다 늘 중간에 말을 멈추는 장면"
  ],
  [
    "你闔上書，關了燈。",
    "You close the book and turn out the light.",
    "本を閉じて、明かりを消す。",
    "책을 덮고 불을 끈다."
  ],
  [
    "睡著以後，你一直往下墜。沒有風，沒有聲音，黑暗稠得像水，一點一點漫過你的口鼻。",
    "After falling asleep, you keep falling. No wind. No sound. Darkness thick as water slowly covers your mouth and nose.",
    "眠りにつくと、どこまでも落ちていく。風も音もない。水のように濃い闇が、少しずつ口と鼻を覆っていく。",
    "잠이 든 뒤에도 끝없이 떨어진다. 바람도 소리도 없다. 물처럼 짙은 어둠이 조금씩 입과 코를 덮어 온다."
  ],
  [
    "你拚命伸手去抓，卻什麼都抓不到。",
    "You reach out desperately, but find nothing to hold.",
    "必死に手を伸ばすけれど、何もつかめない。",
    "필사적으로 손을 뻗어 붙잡으려 하지만 아무것도 잡히지 않는다."
  ],
  [
    "你不掙扎，等自己落到底。",
    "You stop struggling and wait to reach the bottom.",
    "もがかずに、底に着くのを待つ。",
    "버둥거리지 않고 바닥에 닿을 때까지 기다린다."
  ],
  [
    "你抬起頭。很遠很遠的上方，有一道細細的光。",
    "You look up. Far, far above, there is a slender thread of light.",
    "見上げる。ずっと、ずっと上に、細い光が見える。",
    "고개를 든다. 아주 먼 위쪽에 가느다란 빛이 보인다."
  ],
  [
    "醒來的時候，你先聞到木頭和煙燻的味道。",
    "When you wake, the first thing you notice is the smell of wood and smoke.",
    "目が覚めて、最初に木と煙の匂いがした。",
    "눈을 뜨자 가장 먼저 나무와 연기 냄새가 느껴진다."
  ],
  [
    "屋頂很低，被子很重，枕頭上留著別人的氣味……這不是你的房間。",
    "The ceiling is low, the blanket heavy, and the pillow smells of someone else... This is not your room.",
    "低い天井、重い掛け布団。枕には知らない人の匂いが残っている……ここは、あなたの部屋じゃない。",
    "천장은 낮고 이불은 무겁다. 베개에는 다른 사람의 냄새가 남아 있다…… 여기는 내 방이 아니다."
  ],
  [
    "你沒睜眼，屏住呼吸，聽屋子裡還有沒有別人。",
    "You keep your eyes closed, hold your breath, and listen for anyone else in the room.",
    "目を閉じたまま息を潜め、ほかに誰かいないか耳を澄ます。",
    "눈을 뜨지 않고 숨을 죽인 채 방 안에 다른 사람이 있는지 귀를 기울인다."
  ],
  [
    "你掀開被子，赤腳踩上冰涼的木地板，先找門在哪裡。",
    "You throw off the blanket, set bare feet on the cold wooden floor, and look for the door.",
    "布団をはねのけ、冷たい木の床に裸足を下ろして、まず扉を探す。",
    "이불을 걷고 차가운 나무 바닥에 맨발을 디딘 뒤, 먼저 문을 찾는다."
  ],
  [
    "你的手在枕頭底下摸到一把短刀。你握住它，沒有出聲。",
    "Your hand finds a short blade under the pillow. You grip it without a sound.",
    "枕の下で短刀に触れた。声を立てずに、その柄を握る。",
    "베개 밑을 더듬던 손에 단검이 잡힌다. 아무 소리 없이 그것을 움켜쥔다."
  ],
  [
    "「讀者大大，早安呀～」一個聲音直接在你腦子裡響起。",
    "“Good morning, dear Reader~” A voice rings out inside your head.",
    "「読者さん、おはようございます～」頭の中に、直接声が響いた。",
    "「독자님, 좋은 아침이에요~」 머릿속에서 곧바로 목소리가 울린다."
  ],
  [
    "下一秒，一片半透明的面板浮到眼前，邊角閃著微光。",
    "A translucent panel floats into view, its edges faintly glowing.",
    "次の瞬間、縁が淡く光る半透明のパネルが目の前に浮かぶ。",
    "다음 순간, 가장자리가 은은하게 빛나는 반투명한 창이 눈앞에 떠오른다."
  ],
  [
    "你看向什麼，就會得到什麼的資料。",
    "Whatever you look at, information about it appears.",
    "何に目を向けても、その情報が表示される。",
    "바라보는 대상의 정보가 곧바로 나타난다."
  ],
  [
    "你最先看的是：",
    "What do you look at first?",
    "最初に見るのは？",
    "가장 먼저 보는 것은?"
  ],
  [
    "讀者資料。至少得先弄清楚，讀者是誰。",
    "The Reader profile. You should at least find out who this “Reader” is.",
    "読者情報。少なくとも「読者」が誰なのかは知っておきたい。",
    "독자 정보. 적어도 '독자'가 누구인지는 알아야 한다."
  ],
  [
    "掛在牆上的那把刀，刀口磨得發亮。",
    "The blade on the wall, its edge polished bright.",
    "壁に掛かった刀。刃はよく研がれて光っている。",
    "벽에 걸린 칼. 잘 갈린 칼날이 반짝인다."
  ],
  [
    "窗戶，夜風從那裡鑽進來，帶著你從沒聞過的味道。",
    "The window. Night air slips through, carrying a scent you have never known.",
    "窓。夜風が、嗅いだことのない匂いを運んでくる。",
    "창문. 한 번도 맡아 본 적 없는 냄새를 실은 밤바람이 스며든다."
  ],
  [
    "門，地板在震動，有腳步聲一步一步靠近。",
    "The door. The floor trembles as footsteps draw nearer.",
    "扉。床が震え、足音が一歩ずつ近づいてくる。",
    "문. 바닥이 울리며 발소리가 한 걸음씩 다가온다."
  ],
  [
    "門被推開了。",
    "The door swings open.",
    "扉が開いた。",
    "문이 열린다."
  ],
  [
    "兩個男人一前一後走進來，個子高得要低頭才不會撞上門框。",
    "Two men enter, one after the other, so tall they must duck beneath the frame.",
    "男が二人、前後して入ってくる。二人とも、かがまないと戸口に頭がぶつかるほど背が高い。",
    "두 남자가 차례로 들어온다. 둘 다 고개를 숙이지 않으면 문틀에 부딪힐 만큼 키가 크다."
  ],
  [
    "他們長得一模一樣，打量你的眼神卻不一樣。",
    "Their faces are identical, but the way they look at you is not.",
    "顔はそっくりなのに、あなたを見る目は違っている。",
    "똑같이 생겼지만 당신을 살피는 눈빛은 서로 다르다."
  ],
  [
    "你攥著被角，先開口：「這裡是哪裡？」",
    "You clutch the blanket and speak first. “Where am I?”",
    "布団の端を握りしめ、先に口を開く。「ここはどこ？」",
    "이불자락을 움켜쥐고 먼저 입을 연다. “여긴 어디예요?”"
  ],
  [
    "你沒說話，在兩張臉之間來回地看，想找出哪裡不一樣。",
    "You say nothing, looking from face to face, trying to spot the difference.",
    "黙ったまま二つの顔を見比べ、違いを探す。",
    "말없이 두 얼굴을 번갈아 보며 다른 점을 찾는다."
  ],
  [
    "「謝謝你們。」不管怎樣，是他們讓你睡在這裡的。",
    "“Thank you.” Whatever else is going on, they gave you a place to sleep.",
    "「ありがとう」何はともあれ、ここで寝かせてくれたのは二人だから。",
    "“고마워요.” 어쨌든 여기서 재워 준 것은 이들이니까."
  ],
  [
    "你先看了一眼他們腰間的刀，再看一眼離你最近的那扇窗。",
    "You glance at the blades at their waists, then at the window nearest you.",
    "二人の腰の刀を見てから、いちばん近い窓へ目をやる。",
    "두 사람의 허리춤에 찬 칼을 보고, 가장 가까운 창문을 살핀다."
  ],
  [
    "「你叫什麼？從哪裡來？」",
    "“What's your name? Where are you from?”",
    "「名前は？　どこから来た？」",
    "“이름이 뭐야? 어디서 왔지?”"
  ],
  [
    "其中一個拉了張椅子，反著跨坐上去，下巴擱在椅背上看你。",
    "One pulls up a chair and straddles it backward, resting his chin on the back as he watches you.",
    "一人が椅子を引き寄せ、背もたれを前にしてまたがる。そこに顎を乗せて、あなたを見た。",
    "한 명은 의자를 끌어와 거꾸로 걸터앉더니 등받이에 턱을 괴고 당신을 바라본다."
  ],
  [
    "另一個靠在門邊沒動，手一直沒離開刀柄。",
    "The other stays by the door, his hand never leaving his sword hilt.",
    "もう一人は扉のそばにもたれたまま、刀の柄から手を離さない。",
    "다른 한 명은 문가에 기대어 움직이지 않는다. 손은 여전히 칼자루에서 떨어지지 않는다."
  ],
  [
    "「我從另一個世界來的。」話一出口，你就後悔了。",
    "“I'm from another world.” You regret it the moment the words leave your mouth.",
    "「別の世界から来たの」口にした瞬間、後悔した。",
    "“다른 세계에서 왔어요.” 말을 꺼내자마자 후회한다."
  ],
  [
    "你只報了名字，其他的一個字也沒多說。",
    "You give only your name. Nothing more.",
    "名前だけ告げて、あとは何も言わない。",
    "이름만 말하고 그 밖에는 한마디도 더 하지 않는다."
  ],
  [
    "「我不記得了。」你低聲說，「如果可以，能讓我在這裡待一陣子嗎？」",
    "“I don't remember,” you say softly. “Could I stay here for a while, if that's all right?”",
    "「覚えてないの」と小さく言う。「よければ、しばらくここに置いてもらえない？」",
    "“기억이 안 나요.” 작은 목소리로 말한다. “괜찮다면 여기서 잠시 지내도 될까요?”"
  ],
  [
    "他們說，是在森林裡把你撿回來的。那時你倒在樹底下，怎麼叫都叫不醒。",
    "They say they found you in the forest, unconscious beneath a tree. No matter how they called, you would not wake.",
    "二人の話では、森であなたを拾ったらしい。木の下に倒れていて、いくら呼んでも目を覚まさなかったという。",
    "두 사람은 숲에서 당신을 주워 왔다고 한다. 나무 밑에 쓰러진 채 아무리 불러도 깨어나지 않았다고."
  ],
  [
    "你走到窗邊，推開窗。天上沒有月亮，只有一道裂縫橫在夜空裡。",
    "You go to the window and push it open. There is no moon, only a rift stretched across the night sky.",
    "窓辺へ歩き、窓を開ける。空に月はなく、夜空を横切る裂け目だけがある。",
    "창가로 가서 창문을 연다. 하늘에 달은 없고, 밤하늘을 가로지르는 균열만 있다."
  ],
  [
    "和書裡寫的一模一樣。",
    "Exactly as it was written in the book.",
    "本に書かれていた通りだ。",
    "책에 쓰인 그대로다."
  ],
  [
    "你看了很久，看到眼睛發酸，還是捨不得移開。",
    "You stare until your eyes ache, still unable to look away.",
    "目が痛くなるまで見つめても、まだ目を離せない。",
    "눈이 시릴 때까지 한참을 바라보면서도 시선을 떼지 못한다."
  ],
  [
    "你回過頭問他們，今年是裂縫降臨的第幾年。",
    "You turn back and ask how many years it has been since the Rift appeared.",
    "振り返り、裂け目が現れてから今年で何年目なのか尋ねる。",
    "뒤돌아 두 사람에게 균열이 나타난 지 올해로 몇 년째인지 묻는다."
  ],
  [
    "你忽然笑出聲來。都穿進書裡了，總得好好活一次。",
    "You suddenly laugh. If you have fallen into a book, you may as well truly live.",
    "ふいに笑いがこぼれた。本の中に来たのなら、一度くらい思いきり生きてやろう。",
    "문득 웃음이 터진다. 책 속에 들어온 김에 제대로 한번 살아 봐야지."
  ],
  [
    "你把窗關上，背靠著牆，慢慢蹲了下去。",
    "You close the window, lean against the wall, and slowly sink to the floor.",
    "窓を閉め、壁に背をつけて、ゆっくりしゃがみ込む。",
    "창문을 닫고 벽에 등을 기댄 채 천천히 주저앉는다."
  ],
  [
    "天亮以後，桌上擺了兩樣東西：一疊烤得金黃的麵根餅和一盤烤肉。",
    "By morning, two dishes sit on the table: a stack of golden breadroot flatbreads and a plate of roast meat.",
    "夜が明けると、卓上にはこんがり焼けた麺根の薄焼きパンと、焼き肉の皿が並んでいた。",
    "날이 밝자 식탁 위에 두 가지 음식이 놓였다. 노릇하게 구운 빵뿌리 납작빵 한 무더기와 구운 고기 한 접시다."
  ],
  [
    "「怪物肉。」其中一個說，「異變的地方切掉了，能吃。」",
    "“Monster meat,” one of them says. “Cut out the mutated bits. The rest is edible.”",
    "「怪物の肉だ」と一人が言う。「変異したところは切り落としてある。食えるぞ」",
    "“괴물 고기야.” 한 명이 말한다. “변이된 부분은 잘라 냈어. 먹어도 돼.”"
  ],
  [
    "你等他們各吃了一口，才拿起自己那份。",
    "You wait until both have taken a bite before picking up your share.",
    "二人がそれぞれ一口食べるのを待ってから、自分の分を手に取る。",
    "두 사람이 한 입씩 먹은 뒤에야 자기 몫을 집어 든다."
  ],
  [
    "你問這是什麼怪物、在哪裡打到的，問到他們都笑了。",
    "You ask what kind of monster it was and where they hunted it, until they both laugh.",
    "何の怪物なのか、どこで狩ったのか、二人が笑い出すまで質問する。",
    "무슨 괴물인지, 어디서 잡았는지 두 사람이 웃음을 터뜨릴 때까지 묻는다."
  ],
  [
    "你拿起一塊餅慢慢地嚼。很粗，很乾，卻是你吃過最實在的一頓。",
    "You take a flatbread and chew slowly. Coarse and dry, yet no meal has ever felt more real.",
    "薄焼きパンを一枚取り、ゆっくり噛む。ざらついて、乾いている。それでも、今まででいちばん確かな食事だった。",
    "빵 한 조각을 천천히 씹는다. 거칠고 퍽퍽하지만, 지금껏 먹은 어떤 식사보다도 실감이 난다."
  ],
  [
    "他們要進森林打獵，你說你也要去。",
    "They are going hunting in the forest. You insist on coming along.",
    "二人が森へ狩りに行くと聞いて、あなたも行くと言った。",
    "두 사람이 숲으로 사냥을 간다기에 당신도 따라가겠다고 한다."
  ],
  [
    "走到林子深處，草叢猛地一晃，一頭背上長滿骨刺的野狼撲了出來，直直衝著你。",
    "Deep in the woods, the undergrowth shudders. A wolf covered in bone spikes bursts out, charging straight at you.",
    "森の奥で茂みが大きく揺れた。背中を骨の棘で覆われた狼が飛び出し、まっすぐあなたへ突っ込んでくる。",
    "숲 깊은 곳에서 수풀이 거세게 흔들린다. 등에 뼈 가시가 가득한 늑대가 튀어나와 당신에게 곧장 달려든다."
  ],
  [
    "你手裡卻什麼都沒有。",
    "Your hands are empty.",
    "手には、何もない。",
    "그런데 손에는 아무것도 없다."
  ],
  [
    "你抄起腳邊的粗樹枝，朝牠的眼睛捅過去。",
    "You snatch a thick branch from the ground and thrust it at the wolf's eye.",
    "足元の太い枝をつかみ、目を狙って突き出す。",
    "발치의 굵은 나뭇가지를 집어 들어 녀석의 눈을 찌른다."
  ],
  [
    "你轉身就往他們兩個的方向跑。",
    "You turn and run toward the two men.",
    "振り返って、二人のいる方へ走る。",
    "몸을 돌려 두 사람이 있는 쪽으로 달린다."
  ],
  [
    "你站著沒動，盯著牠，等牠先露出破綻。",
    "You stand your ground, watching for the first opening.",
    "動かずに睨みつけ、先に隙を見せるのを待つ。",
    "움직이지 않고 노려보며 먼저 빈틈을 드러내길 기다린다."
  ],
  [
    "你抓起一把泥沙，狠狠丟在牠臉上。",
    "You grab a fistful of dirt and fling it hard into the wolf's face.",
    "土砂をひとつかみ取り、顔めがけて思いきり投げつける。",
    "흙과 모래를 한 줌 움켜쥐어 녀석의 얼굴에 힘껏 던진다."
  ],
  [
    "回程時，你們繞去邊境聚落，拿獵物的皮和骨頭換結晶。",
    "On the way back, you stop at a frontier settlement to trade hides and bones for crystals.",
    "帰り道、辺境の集落に寄り、獲物の皮や骨を結晶と交換した。",
    "돌아가는 길에 변경의 정착지에 들러 사냥감의 가죽과 뼈를 결정으로 바꾼다."
  ],
  [
    "攤位前擠滿了人。你看見一個瘦得只剩骨頭的孩子，把手伸進了旁人的布袋。",
    "The stalls are crowded. You spot a painfully thin child slipping a hand into someone's cloth bag.",
    "露店の前は人でいっぱいだ。骨ばかりの痩せた子どもが、誰かの布袋に手を入れるのが見えた。",
    "노점 앞은 사람들로 붐빈다. 뼈만 앙상한 아이가 다른 사람의 천 주머니에 손을 넣는 것이 보인다."
  ],
  [
    "你想都沒想，一把扣住那隻手。",
    "Without thinking, you seize the child's wrist.",
    "考える間もなく、その手首をつかむ。",
    "생각할 틈도 없이 그 손을 덥석 붙잡는다."
  ],
  [
    "你走過去，替他把東西塞回布袋，順勢擋在他身前。",
    "You walk over, slip the item back into the bag, and step between the child and the crowd.",
    "近づいて品物を袋へ戻し、そのまま子どもの前に立ってかばう。",
    "다가가 아이 대신 물건을 주머니에 돌려놓고, 자연스럽게 앞을 가로막아 아이를 가려 준다."
  ],
  [
    "你什麼都沒說，只記下他往哪條巷子跑。",
    "You say nothing, but note which alley the child runs into.",
    "何も言わず、子どもが逃げた路地だけ覚えておく。",
    "아무 말 없이 아이가 어느 골목으로 달아나는지만 기억해 둔다."
  ],
  [
    "你把剛換到的那顆灰結晶，悄悄塞進他手裡。",
    "You quietly press the gray crystal you just received into the child's hand.",
    "さっき手に入れた灰色の結晶を、そっと子どもの手に握らせる。",
    "방금 받은 회색 결정을 아이의 손에 몰래 쥐여 준다."
  ],
  [
    "離開前，探索者協會的布告欄貼出一張新委託：東邊山谷冒出了一座裂隙。",
    "Before you leave, a new request appears on the Explorers' Guild board: a dungeon rift has opened in the eastern valley.",
    "帰る前に、探索者協会の掲示板に新しい依頼が貼られた。東の谷に裂隙が出現したという。",
    "떠나기 전, 탐험가 협회 게시판에 새 의뢰가 붙는다. 동쪽 계곡에 던전 균열이 생겼다는 내용이다."
  ],
  [
    "「讀者大大～這座裂隙不大，很適合新手喔！」系統在你腦子裡說得很開心。",
    "“Dear Reader~ This dungeon rift is small. Perfect for a beginner!” The System sounds delighted inside your head.",
    "「読者さん～この裂隙は小さいから、初心者にぴったりですよ！」頭の中でシステムが楽しそうに言う。",
    "「독자님~ 이 던전 균열은 작아서 초보자에게 딱이에요!」 머릿속에서 시스템이 신이 나서 말한다."
  ],
  [
    "他們看完委託，決定去一趟。",
    "After reading the request, the two men decide to go.",
    "依頼を読んだ二人は、行ってみることにした。",
    "의뢰를 읽은 두 사람은 가 보기로 한다."
  ],
  [
    "其中一個回頭看你：「你要跟？」",
    "One looks back at you. “Coming?”",
    "一人が振り返る。「お前も来るか？」",
    "한 명이 돌아본다. “너도 올 거야?”"
  ],
  [
    "「要。」你答得比腦子還快。",
    "“Yes.” Your answer comes faster than thought.",
    "「行く」考えるより先に答えていた。",
    "“네.” 생각보다 대답이 먼저 튀어나온다."
  ],
  [
    "「我可以幫你們背東西、守行李。」",
    "“I can carry things and watch your gear.”",
    "「荷物を運んだり、見張ったりできるよ」",
    "“짐을 나르거나 지켜 드릴 수 있어요.”"
  ],
  [
    "「我看得到你們看不到的東西。」你沒說是什麼。",
    "“I can see things you can't.” You do not explain what.",
    "「二人には見えないものが見えるの」何が、とは言わなかった。",
    "“두 사람에게는 보이지 않는 게 보여요.” 무엇인지는 말하지 않는다."
  ],
  [
    "你沒回答，從他們的行李裡抽出一把短刀，綁上自己的腰。",
    "You say nothing. You take a short blade from their gear and strap it to your waist.",
    "答える代わりに、二人の荷物から短刀を抜き、自分の腰に結びつける。",
    "대답 대신 두 사람의 짐에서 단검을 꺼내 허리에 묶는다."
  ],
  [
    "裂隙裡的怪物比森林裡兇，你們一路打一路退，最後被逼進一處岔口。",
    "The monsters inside are fiercer than those in the forest. Fighting as you retreat, you are finally cornered at a junction.",
    "裂隙の怪物は森のものより凶暴だった。戦いながら後退するうち、分かれ道まで追い詰められた。",
    "던전 균열 안의 괴물들은 숲의 괴물보다 사납다. 싸우며 물러나다 마침내 갈림길에 몰린다."
  ],
  [
    "「你選。」其中一個喘著氣說。",
    "“You choose,” one of them says between breaths.",
    "「お前が選べ」と一人が息を切らして言う。",
    "“네가 골라.” 한 명이 숨을 몰아쉬며 말한다."
  ],
  [
    "左邊。石壁上長滿光苔，綠瑩瑩地一路亮進深處。",
    "Left. Glowing moss coats the stone walls, a green light leading deep within.",
    "左。石壁を光る苔が覆い、緑の光が奥へ続いている。",
    "왼쪽. 돌벽을 뒤덮은 발광 이끼가 초록빛으로 깊은 곳까지 이어진다."
  ],
  [
    "右邊。裡面傳來低沉的喘息聲，像有什麼東西在睡。",
    "Right. A low, heavy breathing comes from within, as if something is asleep.",
    "右。何かが眠っているような、低い息遣いが聞こえる。",
    "오른쪽. 안에서 무언가 잠든 듯 낮은 숨소리가 들린다."
  ],
  [
    "中間。一片漆黑，冷風從裡面一陣一陣地吹出來。",
    "Straight ahead. Pitch-black, with gusts of cold wind blowing out.",
    "真ん中。真っ暗で、冷たい風が繰り返し吹き出してくる。",
    "가운데. 칠흑같이 어둡고 찬바람이 거듭 불어 나온다."
  ],
  [
    "通道盡頭是一座圓形的石廳。",
    "The passage ends in a circular stone hall.",
    "通路の先は、円形の石の広間だった。",
    "통로 끝에는 원형의 석실이 있다."
  ],
  [
    "首領從暗處站起來，比你見過的任何怪物都大，甲殼上滿是舊傷。",
    "The boss rises from the shadows, larger than any monster you have seen. Old wounds scar its carapace.",
    "暗がりから首領が立ち上がる。今まで見たどの怪物よりも大きく、甲殻は古傷だらけだ。",
    "어둠 속에서 우두머리가 몸을 일으킨다. 지금껏 본 어떤 괴물보다 크고, 갑각에는 오래된 상처가 가득하다."
  ],
  [
    "他們一左一右擋在你前面，頭也沒回：「待在後面。」",
    "The two men move in front of you, one on each side. Neither looks back. “Stay behind us.”",
    "二人が左右から前に出る。振り返りもせずに言った。「後ろにいろ」",
    "두 사람이 좌우에서 앞을 막아선다. 돌아보지도 않고 말한다. “뒤에 있어.”"
  ],
  [
    "你沒有待在後面。",
    "You do not stay behind them.",
    "後ろには、いなかった。",
    "뒤에 머물지 않는다."
  ],
  [
    "你繞著牆跑，引牠轉頭，替他們騰出空檔。",
    "You run along the wall, drawing its gaze and giving them an opening.",
    "壁沿いに走って首領の目を引き、二人に隙を作る。",
    "벽을 따라 달려 녀석의 시선을 끌고 두 사람에게 공격할 틈을 만든다."
  ],
  [
    "你撿起地上的短刀，朝牠胸口那道舊傷擲過去。",
    "You pick up a short blade and hurl it at the old wound on its chest.",
    "落ちていた短刀を拾い、胸の古傷めがけて投げる。",
    "바닥의 단검을 집어 녀석의 가슴에 난 오래된 상처를 향해 던진다."
  ],
  [
    "你退到牆邊，把他們丟下的背包抱在懷裡，替他們守著。",
    "You retreat to the wall and hold their discarded packs close, keeping them safe.",
    "壁際へ下がり、二人が放り出した背嚢を抱えて守る。",
    "벽가로 물러나 두 사람이 내려놓은 배낭을 품에 안고 지킨다."
  ],
  [
    "首領倒下以後，石廳裡只剩下你們的喘氣聲。",
    "When the boss falls, only your ragged breathing remains in the hall.",
    "首領が倒れると、広間には三人の荒い息だけが残った。",
    "우두머리가 쓰러진 뒤, 석실에는 세 사람의 거친 숨소리만 남는다."
  ],
  [
    "廳中央有一座石台，上面放著四樣東西。他們讓你挑。",
    "A stone pedestal stands in the center with four objects on it. They let you choose.",
    "中央の石台には四つの品が置かれている。二人はあなたに選ばせてくれた。",
    "석실 중앙의 제단 위에 네 가지 물건이 놓여 있다. 두 사람은 당신에게 고르라고 한다."
  ],
  [
    "「讀者大大，只能拿一件喔，拿了這裡就會塌～」系統小小聲地說。",
    "“Dear Reader, only one item. Take it, and this place will collapse~” the System whispers.",
    "「読者さん、一つだけですよ。取ったらここ、崩れますからね～」システムが小声で告げる。",
    "「독자님, 하나만 가져갈 수 있어요. 가져가면 여기가 무너지거든요~」 시스템이 작은 목소리로 말한다."
  ],
  [
    "一盞提燈。燈芯燒著，像是從來沒有熄過。",
    "A lantern. Its wick burns as though it has never gone out.",
    "ランタン。灯芯は、一度も消えたことがないかのように燃えている。",
    "등불. 한 번도 꺼진 적 없는 듯 심지가 타고 있다."
  ],
  [
    "一枚貝殼。貼在耳邊，能聽見很遠很遠的地方。",
    "A seashell. Held to your ear, it carries sounds from very far away.",
    "貝殻。耳に当てると、遥か遠くの音が聞こえる。",
    "조개껍데기. 귀에 대면 아주 먼 곳의 소리가 들린다."
  ],
  [
    "一個布袋。不管往裡面放多少東西，都裝不滿。",
    "A cloth bag. No matter how much goes inside, it never fills up.",
    "布袋。どれだけ物を入れても、いっぱいにならない。",
    "천 주머니. 아무리 물건을 넣어도 가득 차지 않는다."
  ],
  [
    "一把刀。刃口沒有半點缺口，像是永遠不會鈍。",
    "A blade. Its edge is flawless, as if it could never dull.",
    "刀。刃こぼれ一つなく、永遠に鈍らないように見える。",
    "칼. 날에 흠집 하나 없고 영원히 무뎌지지 않을 것 같다."
  ],
  [
    "你的指尖碰到它的那一刻，石廳開始崩塌。",
    "The instant your fingertips touch it, the stone hall begins to collapse.",
    "指先が触れた瞬間、石の広間が崩れ始めた。",
    "손끝이 닿는 순간, 석실이 무너지기 시작한다."
  ],
  [
    "碎石從頭頂砸下來，有人抓住你的手臂往外拖。",
    "Rocks rain down. Someone grabs your arm and pulls you toward the exit.",
    "頭上から瓦礫が降り、誰かがあなたの腕をつかんで外へ引く。",
    "머리 위에서 돌무더기가 쏟아진다. 누군가 팔을 붙잡고 바깥으로 끌어낸다."
  ],
  [
    "你抬起頭，從崩開的岩縫裡，看見了那道裂縫。",
    "You look up. Through the splitting stone, you see the Rift.",
    "見上げると、崩れた岩の隙間から、あの裂け目が見えた。",
    "고개를 들자 갈라진 바위틈 사이로 그 균열이 보인다."
  ],
  [
    "它的光落在你身上。那一瞬間，你感覺到……",
    "Its light falls upon you. In that instant, you feel...",
    "その光が、あなたに降り注ぐ。その瞬間、感じたのは……",
    "그 빛이 당신에게 내려앉는다. 그 순간 느껴지는 것은……"
  ],
  [
    "冷。從骨頭裡往外透的冷，冷得你說不出話。",
    "Cold. It seeps out from your bones, so deep you cannot speak.",
    "冷たい。骨の奥から染み出す冷たさに、声も出ない。",
    "차갑다. 뼛속에서부터 스며 나오는 냉기에 말조차 나오지 않는다."
  ],
  [
    "燙。有什麼從心口燒起來，一路燒到指尖。",
    "Heat. Something burns in your chest, spreading all the way to your fingertips.",
    "熱い。胸の奥で何かが燃え、指先まで駆け抜ける。",
    "뜨겁다. 가슴속에서 무언가 타올라 손끝까지 번진다."
  ],
  [
    "重。全身的骨頭，像是變成了鐵。",
    "Weight. Every bone in your body seems to turn to iron.",
    "重い。全身の骨が、鉄に変わったみたいだ。",
    "무겁다. 온몸의 뼈가 쇠로 변한 것 같다."
  ],
  [
    "系統",
    "System",
    "システム",
    "시스템"
  ],
  [
    "稀有元素",
    "Rare element",
    "稀少元素",
    "희귀 원소"
  ],
  [
    "常見元素",
    "Common element",
    "一般元素",
    "일반 원소"
  ],
  [
    "能力",
    "Abilities",
    "能力",
    "능력"
  ],
  [
    "基本能力",
    "Base ability",
    "基本能力",
    "기본 능력"
  ],
  [
    "初始技能",
    "Starting skills",
    "初期スキル",
    "초기 스킬"
  ],
  [
    "特性",
    "Traits",
    "特性",
    "특성"
  ],
  [
    "副作用",
    "Side effects",
    "副作用",
    "부작용"
  ],
  [
    "雙元素覺醒",
    "Dual Awakening",
    "双元素覚醒",
    "이중 원소 각성"
  ],
  [
    "兩種力量，同時在你體內醒來",
    "Two powers awaken within you at once.",
    "二つの力が、同時にあなたの中で目覚める",
    "두 가지 힘이 동시에 당신 안에서 깨어나요"
  ],
  [
    "哇！讀者大大一口氣覺醒了【{a}】和【{b}】兩種元素！這個世界可是很少人做得到的喔～",
    "Wow, dear Reader! You awakened both {a} and {b} at once! Very few people in this world can do that~",
    "わあ、読者さん！【{a}】と【{b}】が一度に覚醒しました！この世界でも、なかなかできることじゃないんですよ～",
    "와, 독자님! 【{a}】와 【{b}】, 두 원소를 한꺼번에 각성하셨어요! 이 세계에서도 아주 드문 일이에요~"
  ],
  [
    "恭喜讀者大大覺醒【{a}】！",
    "Congratulations, dear Reader! You awakened {a}!",
    "読者さん、【{a}】の覚醒おめでとうございます！",
    "독자님, 【{a}】 각성을 축하해요!"
  ],
  [
    "是稀有元素喔～",
    " It's a rare element~",
    "稀少な元素ですよ～",
    " 희귀 원소예요~"
  ],
  [
    "好好鍛鍊，會很強的喔～",
    " Train hard, and you'll grow strong~",
    "しっかり鍛えれば、強くなれますよ～",
    " 열심히 단련하면 강해질 거예요~"
  ],
  [
    "可能覺醒的第二元素",
    "Potential second element",
    "覚醒するかもしれない第二元素",
    "각성 가능한 두 번째 원소"
  ],
  [
    "系統偷偷告訴你：多數人一生只有一種元素，你之後還有 {pct}% 機率覺醒【{b}】喔～",
    "A little secret: most people only ever have one element. You still have a {pct}% chance of awakening {b} later~",
    "内緒ですよ。ほとんどの人は一生に一つだけですが、あなたには今後【{b}】が覚醒する可能性が{pct}%あります～",
    "살짝 알려 드릴게요. 대부분은 평생 원소가 하나뿐이지만, 당신은 나중에 【{b}】를 각성할 확률이 {pct}%나 돼요~"
  ],
  [
    "我在裂縫下覺醒了【{a} × {b}】雙元素",
    "I awakened two elements beneath the Rift: {a} × {b}!",
    "裂け目の下で【{a} × {b}】の双元素に覚醒しました！",
    "균열 아래에서 【{a} × {b}】, 두 원소를 각성했어요!"
  ],
  [
    "\n\n《裂空的伊爾卡》元素測驗",
    "\n\nIlka of the Shattered Sky — Element Quiz",
    "\n\n『裂空のイルカ』元素診断",
    "\n\n《갈라진 하늘의 이르카》 원소 테스트"
  ],
  [
    "我在裂縫下覺醒了【{a}】",
    "I awakened {a} beneath the Rift!",
    "裂け目の下で【{a}】に覚醒しました！",
    "균열 아래에서 【{a}】를 각성했어요!"
  ],
  [
    "（稀有元素）",
    " (Rare element)",
    "（稀少元素）",
    " (희귀 원소)"
  ],
  [
    "\n基本能力：",
    "\nBase ability: ",
    "\n基本能力：",
    "\n기본 능력: "
  ],
  [
    "\n初始技能：",
    "\nStarting skills: ",
    "\n初期スキル：",
    "\n초기 스킬: "
  ],
  [
    "\n第二元素：",
    "\nSecond element: ",
    "\n第二元素：",
    "\n두 번째 원소: "
  ],
  [
    "%）\n\n《裂空的伊爾卡》元素測驗",
    "%)\n\nIlka of the Shattered Sky — Element Quiz",
    "%）\n\n『裂空のイルカ』元素診断",
    "%)\n\n《갈라진 하늘의 이르카》 원소 테스트"
  ],
  [
    "【系統】覺醒判定完成",
    "[System] Awakening confirmed",
    "【システム】覚醒判定完了",
    "【시스템】 각성 판정 완료"
  ],
  [
    "元素共鳴",
    "Elemental Resonance",
    "元素共鳴",
    "원소 공명"
  ],
  [
    "元素只作用於自身與周邊，使用會消耗精力。強度因人而異，可以鍛鍊。",
    "Elements affect only you and your immediate surroundings. Using them consumes energy. Strength varies by person and grows with training.",
    "元素が作用するのは自分自身とその周囲のみ。使用には気力を消耗する。強さには個人差があり、鍛えることで伸ばせる。",
    "원소는 자신과 주변에만 작용하며, 사용하면 기력이 소모된다. 강도는 사람마다 다르고 단련할 수 있다."
  ],
  [
    "《裂空的伊爾卡》元素測驗",
    "Ilka of the Shattered Sky — Element Quiz",
    "『裂空のイルカ』元素診断",
    "《갈라진 하늘의 이르카》 원소 테스트"
  ],
  [
    "製作圖片中⋯",
    "Creating image...",
    "画像を作成中…",
    "이미지 만드는 중…"
  ],
  [
    "儲存結果圖",
    "Save result image",
    "結果画像を保存",
    "결과 이미지 저장"
  ],
  [
    "圖片沒有做成，請再按一次",
    "Couldn't create the image. Please try again.",
    "画像を作成できませんでした。もう一度お試しください",
    "이미지를 만들지 못했어요. 다시 눌러 주세요"
  ],
  [
    "請長按圖片儲存。",
    "Press and hold the image to save it.",
    "画像を長押しして保存してください。",
    "이미지를 길게 눌러 저장해 주세요."
  ],
  [
    "如果沒有自動下載，請長按或右鍵點圖片儲存。",
    "If the download doesn't start, press and hold or right-click the image to save it.",
    "ダウンロードが始まらない場合は、画像を長押し、または右クリックして保存してください。",
    "자동으로 다운로드되지 않으면 이미지를 길게 누르거나 마우스 오른쪽 버튼으로 눌러 저장해 주세요."
  ],
  [
    "這裡沒辦法直接存檔，請長按圖片，選「加入照片」。",
    "Direct saving is unavailable here. Press and hold or right-click the image to save it.",
    "ここでは直接保存できません。画像を長押し、または右クリックして保存してください。",
    "여기서는 바로 저장할 수 없어요. 이미지를 길게 누르거나 마우스 오른쪽 버튼으로 눌러 저장해 주세요."
  ],
  [
    "已存好結果圖",
    "Result image saved",
    "結果画像を保存しました",
    "결과 이미지를 저장했어요"
  ],
  [
    "請稍等一下再按",
    "Please wait a moment before trying again.",
    "少し待ってから、もう一度押してください",
    "잠시 기다렸다가 다시 눌러 주세요"
  ],
  [
    "名字",
    "Name",
    "名前",
    "이름"
  ],
  [
    "性別",
    "Gender",
    "性別",
    "성별"
  ],
  [
    "年齡",
    "Age",
    "年齢",
    "나이"
  ],
  [
    "穿越前",
    "Before arrival",
    "転移前",
    "차원 이동 전"
  ],
  [
    "外貌",
    "Appearance",
    "外見",
    "외모"
  ],
  [
    "性格",
    "Personality",
    "性格",
    "성격"
  ],
  [
    "【讀者資料】",
    "[Reader Profile]",
    "【読者情報】",
    "【독자 정보】"
  ],
  [
    "身分：穿越者（系統綁定）",
    "Identity: Otherworlder (bound to the System)",
    "身分：異世界からの転移者（システム紐付け済み）",
    "신분: 이세계 전이자 (시스템 귀속)"
  ],
  [
    "元素：{a} × {b}",
    "Elements: {a} × {b}",
    "元素：{a} × {b}",
    "원소: {a} × {b}"
  ],
  [
    "基本能力：{a}、{b}",
    "Base abilities: {a}, {b}",
    "基本能力：{a}、{b}",
    "기본 능력: {a}, {b}"
  ],
  [
    "初始技能：",
    "Starting skills:",
    "初期スキル：",
    "초기 스킬:"
  ],
  [
    "特性（{name}）：",
    "Traits ({name}):",
    "特性（{name}）：",
    "특성 ({name}):"
  ],
  [
    "副作用（{name}）：{value}",
    "Side effects ({name}): {value}",
    "副作用（{name}）：{value}",
    "부작용 ({name}): {value}"
  ],
  [
    "沒有複製成功，已幫你選取預覽的文字，請長按自行複製。",
    "Copying failed. The preview text is selected; copy it manually.",
    "コピーできませんでした。プレビューの文字を選択したので、手動でコピーしてください。",
    "복사하지 못했어요. 미리보기 글을 선택했으니 직접 복사해 주세요."
  ],
  [
    "已複製人設表格",
    "Profile copied",
    "プロフィールをコピーしました",
    "캐릭터 설정표를 복사했어요"
  ],
  [
    "已複製！貼到角色卡的人設欄就好。",
    "Copied! Paste it into your character card's persona field.",
    "コピーしました！キャラクターカードの人物設定欄に貼り付けてください。",
    "복사했어요! 캐릭터 카드의 페르소나 칸에 붙여 넣어 주세요."
  ],
  [
    "伊爾卡元素測驗",
    "Ilka Element Quiz",
    "イルカ元素診断",
    "이르카 원소 테스트"
  ],
  [
    "走進《裂空的伊爾卡》的裂縫，測出你會覺醒哪一種元素力量。",
    "Step through the Rift in Ilka of the Shattered Sky and discover which elemental powers will awaken within you.",
    "『裂空のイルカ』の裂け目をくぐり、あなたに目覚める元素の力を見つけよう。",
    "《갈라진 하늘의 이르카》의 균열로 들어가 당신 안에서 깨어날 원소의 힘을 찾아보세요."
  ],
  [
    "裂空的伊爾卡｜元素覺醒測驗",
    "Ilka of the Shattered Sky — Element Awakening Quiz",
    "裂空のイルカ｜元素覚醒診断",
    "갈라진 하늘의 이르카 · 원소 각성 테스트"
  ],
  [
    "你會覺醒哪一種元素？走進裂縫，找出你的元素力量。",
    "Which elements will awaken in you? Enter the Rift and discover your powers.",
    "どの元素が目覚める？　裂け目の先で、あなたの力を見つけよう。",
    "당신에게 어떤 원소가 깨어날까요? 균열 속으로 들어가 당신의 힘을 찾아보세요."
  ],
  [
    "深色星空中一道紫色裂縫，文字寫著你會覺醒哪一種元素？",
    "A violet rift in a dark, starry sky, with a title asking which element will awaken in you.",
    "暗い星空に紫の裂け目。「どの元素が目覚める？」と書かれた画像。",
    "어두운 별하늘의 보랏빛 균열과 '어떤 원소가 깨어날까요?'라는 제목이 있는 이미지."
  ],
  [
    "繁體中文",
    "繁體中文",
    "繁體中文",
    "繁體中文"
  ],
  [
    "日本語",
    "日本語",
    "日本語",
    "日本語"
  ],
  [
    "《裂空的伊爾卡》",
    "Ilka of the Shattered Sky",
    "『裂空のイルカ』",
    "《갈라진 하늘의 이르카》"
  ],
  [
    "二十年前的某個夜晚，月亮被撕成了一道裂縫。",
    "One night, twenty years ago, the moon was torn into a rift.",
    "二十年前のある夜、月が引き裂かれ、一筋の裂け目になった。",
    "20년 전 어느 밤, 달이 찢어져 하나의 균열이 되었다."
  ],
  [
    "動植物開始異變，城市一座座倒下。",
    "Plants and animals began to mutate. Cities fell, one after another.",
    "動植物が変異し始め、都市は一つ、また一つと崩れていった。",
    "동식물이 변이하기 시작했고, 도시들은 하나둘 무너졌다."
  ],
  [
    "人們不再數日子，只看它的顏色過活：",
    "People stopped counting days, living instead by its colors: ",
    "人々は日を数えるのをやめ、裂け目の色を頼りに暮らした。",
    "사람들은 날짜를 세는 대신 균열의 빛깔에 기대어 살았다. "
  ],
  [
    "翡翠",
    "Emerald",
    "翡翠",
    "비취"
  ],
  [
    "、",
    ", ",
    "、",
    ", "
  ],
  [
    "金石",
    "Goldstone",
    "金石",
    "금석"
  ],
  [
    "琥珀",
    "Amber",
    "琥珀",
    "호박"
  ],
  [
    "灰曜",
    "Ashglow",
    "灰曜",
    "회요"
  ],
  [
    "。",
    ".",
    "。",
    "."
  ],
  [
    "每當它轉成血紅，代表「",
    "Whenever it turned blood-red, a ",
    "血のような赤に染まれば、「",
    "핏빛으로 물들 때면 '"
  ],
  [
    "獸潮",
    "Beast Tide",
    "獣潮",
    "야수의 파도"
  ],
  [
    "」要來了。",
    " was on its way.",
    "」が来る合図だった。",
    "'가 몰려온다는 뜻이었다."
  ],
  [
    "倖存者們築起圍牆、建立聚落，一起抵抗異獸。",
    "Survivors raised walls and built settlements, standing together against the mutated beasts.",
    "生存者たちは壁を築き、集落を作り、ともに異形の獣に立ち向かった。",
    "생존자들은 성벽을 쌓고 정착지를 세워 변이한 짐승들에 맞섰다."
  ],
  [
    "而有些人，在裂縫的光下覺醒了力量⋯⋯",
    "And some awakened powers beneath the Rift's light...",
    "そして、裂け目の光の下で、力に目覚める者が現れた……",
    "그리고 어떤 이들은 균열의 빛 아래에서 힘을 각성했다……"
  ],
  [
    "你讀到這裡，眼皮越來越重。",
    "As you read on, your eyelids grow heavier.",
    "そこまで読んだところで、まぶたが重くなってきた。",
    "여기까지 읽자 눈꺼풀이 점점 무거워진다."
  ],
  [
    "點一下繼續",
    "Tap to continue",
    "タップして続ける",
    "눌러서 계속"
  ],
  [
    "跳過",
    "Skip",
    "スキップ",
    "건너뛰기"
  ],
  [
    "你會覺醒",
    "Which elements",
    "あなたには",
    "어떤 원소가"
  ],
  [
    "哪一種元素？",
    "will you awaken?",
    "どの元素が目覚める？",
    "깨어날까요?"
  ],
  [
    "常見",
    "Common",
    "一般",
    "일반"
  ],
  [
    "稀有",
    "Rare",
    "稀少",
    "희귀"
  ],
  [
    "開始測驗",
    "Begin the quiz",
    "診断を始める",
    "테스트 시작"
  ],
  [
    "共 15 題・約 4 分鐘",
    "15 questions · About 4 minutes",
    "全15問・約4分",
    "총 15문항 · 약 4분"
  ],
  [
    "上一題",
    "Previous",
    "前の質問",
    "이전 문항"
  ],
  [
    "建立讀者資料，帶進故事裡",
    "Create your profile and enter the story",
    "読者情報を作って、物語へ",
    "독자 정보를 만들고 이야기 속으로"
  ],
  [
    "重新測驗",
    "Try again",
    "もう一度診断する",
    "다시 테스트하기"
  ],
  [
    "元素覺醒結果圖",
    "Your elemental awakening result",
    "元素覚醒の結果画像",
    "원소 각성 결과 이미지"
  ],
  [
    "最後一步",
    "One last step",
    "最後のステップ",
    "마지막 단계"
  ],
  [
    "讀者資料表",
    "Reader Profile",
    "読者プロフィール",
    "독자 프로필"
  ],
  [
    "讀者大大～把資料填一填，複製起來，貼進角色卡的人設欄，就能帶著這身元素進入故事囉！",
    "Dear Reader~ Fill in your details, copy the profile, and paste it into your character card's persona field. Then step into the story with your new powers!",
    "読者さん～情報を入力してコピーしたら、キャラクターカードの人物設定欄に貼り付けてくださいね。この元素の力を連れて、物語に入れますよ！",
    "독자님~ 정보를 적고 복사해서 캐릭터 카드의 페르소나 칸에 붙여 넣어 주세요. 새로 얻은 원소의 힘과 함께 이야기 속으로 들어갈 수 있어요!"
  ],
  [
    "你在這個世界的名字",
    "Your name in this world",
    "この世界でのあなたの名前",
    "이 세계에서의 이름"
  ],
  [
    "職業或身分",
    "Occupation or identity",
    "職業や立場",
    "직업 또는 신분"
  ],
  [
    "預覽",
    "Preview",
    "プレビュー",
    "미리보기"
  ],
  [
    "讀者資料表預覽",
    "Reader profile preview",
    "読者プロフィールのプレビュー",
    "독자 프로필 미리보기"
  ],
  [
    "複製人設表格",
    "Copy character profile",
    "人物設定をコピー",
    "캐릭터 설정표 복사"
  ],
  [
    "沒填的欄位會留空，貼上後也能再改。",
    "Blank fields stay empty. You can edit them after pasting.",
    "未入力の項目は空欄になります。貼り付けた後でも編集できます。",
    "입력하지 않은 칸은 비워 둬요. 붙여 넣은 뒤에도 수정할 수 있어요."
  ],
  [
    "{label}：{value}",
    "{label}: {value}",
    "{label}：{value}",
    "{label}: {value}"
  ],
  [
    "語言",
    "Language",
    "言語",
    "언어"
  ],
  [
    "在分享選單選擇「儲存影像」，即可存入相簿。",
    "Choose Save Image in the share menu to save it to Photos.",
    "共有メニューで「画像を保存」を選ぶと、写真に保存できます。",
    "공유 메뉴에서 '이미지 저장'을 선택하면 사진 앱에 저장할 수 있어요."
  ],
  [
    "請長按下方圖片，選擇「儲存影像」存入相簿。",
    "Press and hold the image below, then choose Save Image to save it to Photos.",
    "下の画像を長押しし、「画像を保存」を選んで写真に保存してください。",
    "아래 이미지를 길게 누른 뒤 '이미지 저장'을 선택해 사진 앱에 저장해 주세요."
  ],
  [
    "分享選單無法開啟，請長按下方圖片並選擇「儲存影像」。",
    "The share menu could not open. Press and hold the image below and choose Save Image.",
    "共有メニューを開けませんでした。下の画像を長押しし、「画像を保存」を選んでください。",
    "공유 메뉴를 열지 못했어요. 아래 이미지를 길게 누른 뒤 '이미지 저장'을 선택해 주세요."
  ]
];
// Strings use the Traditional Chinese source as their stable lookup key.
window.I18N = (() => {
  const supported = ['zh', 'en', 'ja', 'ko'];
  const columns = {en: 1, ja: 2, ko: 3};
  const catalog = new Map(TRANSLATIONS.map(row => [row[0], row]));
  const missing = new Set();
  const normalize = value => {
    const code = String(value || '').toLowerCase().split('-')[0];
    return supported.includes(code) ? code : null;
  };
  let preference = null;
  try { preference = normalize(localStorage.getItem('irka-language')); } catch (_) {}
  const explicit = normalize(new URL(location.href).searchParams.get('lang'));
  const automatic = (navigator.languages || [navigator.language]).map(normalize).find(Boolean);
  const language = explicit || preference || automatic || 'en';
  const fonts = {
    zh: {display:'"Chiron Sung HK","Noto Serif TC","Songti TC","PMingLiU",serif',body:'"Chiron Hei HK","Noto Sans TC","PingFang TC","Microsoft JhengHei",sans-serif'},
    en: {display:'"Chiron Sung HK",Georgia,serif',body:'"Chiron Hei HK",Arial,sans-serif'},
    ja: {display:'"Noto Serif JP","Yu Mincho",serif',body:'"Noto Sans JP","Yu Gothic",sans-serif'},
    ko: {display:'"Noto Serif KR","Batang",serif',body:'"Noto Sans KR","Malgun Gothic",sans-serif'}
  }[language];
  const tr = (source, values = {}) => {
    const row = catalog.get(source);
    if (language !== 'zh' && !row) missing.add(source);
    const text = language === 'zh' ? source : row?.[columns[language]] ?? source;
    return text.replace(/\{(\w+)\}/g, (token, key) => Object.hasOwn(values,key) ? String(values[key]) : token);
  };
  function localizePage() {
    const html = document.documentElement;
    html.lang = {zh:'zh-Hant', en:'en', ja:'ja', ko:'ko'}[language];
    html.style.setProperty('--font-display',fonts.display);
    html.style.setProperty('--font-body',fonts.body);
    const select = document.getElementById('languageSelect');
    select.value = language;
    if (language === 'ja' || language === 'ko') {
      const suffix = language === 'ja' ? 'JP' : 'KR';
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Noto+Sans+'+suffix+':wght@400;500;700&family=Noto+Serif+'+suffix+':wght@500;700;900&display=swap';
      document.head.appendChild(link);
    }
    const walker = document.createTreeWalker(html,NodeFilter.SHOW_TEXT);
    const nodes = [];
    while(walker.nextNode()) {
      const node = walker.currentNode;
      if(node.parentElement?.closest('script,style,select'))continue;
      const source = node.textContent.trim();
      if(catalog.has(source))nodes.push([node,source]);
    }
    nodes.forEach(([node,source]) => {
      const leading = node.textContent.match(/^\s*/)[0];
      const trailing = node.textContent.match(/\s*$/)[0];
      node.textContent = leading+tr(source)+trailing;
    });
    document.querySelectorAll('[placeholder],[aria-label],[alt]').forEach(el => {
      for(const attr of ['placeholder','aria-label','alt']) {
        if(el.hasAttribute(attr) && catalog.has(el.getAttribute(attr)))el.setAttribute(attr,tr(el.getAttribute(attr)));
      }
    });
    document.querySelectorAll('meta[name="description"],meta[property="og:title"],meta[property="og:description"],meta[property="og:image:alt"]').forEach(el => { el.content=tr(el.content); });
    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if(ogLocale)ogLocale.content={zh:'zh_TW',en:'en_US',ja:'ja_JP',ko:'ko_KR'}[language];
  }
  function change(language) {
    if(!supported.includes(language))return;
    try { localStorage.setItem('irka-language',language); } catch (_) {}
    const url = new URL(location.href);
    url.searchParams.set('lang',language);
    location.assign(url.href);
  }
  return {language,fonts,tr,localizePage,change,missing,resumeKey:'irka-language-resume-v1'};
})();
