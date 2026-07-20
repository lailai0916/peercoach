"use strict";

(() => {
  const LANGUAGE_KEY = "peercoach-language";
  const darkMedia = matchMedia("(prefers-color-scheme: dark)");

  const BRAND = {
    en: {
      title: "PeerCoach",
      description: "An AI role-play trainer for practicing peer mental-health support in Chinese schools.",
    },
    zh: {
      title: "知心陪练",
      description: "面向中国校园朋辈心理互助的 AI 角色扮演训练工具。",
    },
  };

  const readLanguage = () => localStorage.getItem(LANGUAGE_KEY) === "zh" ? "zh" : "en";
  const systemTheme = () => darkMedia.matches ? "dark" : "light";

  let language = readLanguage();
  let theme = systemTheme();

  const UI = {
    en: {
      switchLanguage: "Switch language",
      toggleTheme: "Toggle theme",
      missionHtml: "<b>How Training Works</b>: AI plays a classmate with a private story. Every response changes their <b>trust</b>—empathy helps them open up, while judgment and lectures close the door. A supervisor observes throughout and gives a professional review at the end.",
      footerHtml: "PeerCoach trains <b>support and referral</b>, not psychological treatment. When a classmate’s situation is beyond what you can carry, you can always say: “Let’s find a trusted adult together.”<br>Emergency support: <a href=\"tel:12355\">12355</a> National Youth Service Hotline · <a href=\"tel:12356\">12356</a> National Mental Health Hotline (24 hours)",
      supervisor: "Supervisor",
      trustDelta: "Trust {value}",
      revealFeedback: "Supervisor feedback is ready · Reveal after class discussion",
      trustGuarded: "Guarded",
      trustTesting: "Testing the waters",
      trustOpen: "Opening up",
      sessionStart: "Session started · {who} · Training goal: {goal}",
      sessionStartAI: "Session started · {who} · Training goal: {goal} · Live AI mode",
      goal: "Training goal: {goal}",
      aiFallback: "AI connection failed ({error}); switched to scripted mode.",
      ownReply: "Respond in your own words…",
      orOwnReply: "Or respond in your own words…",
      send: "Send",
      recorded: "Recorded.",
      studentWithdrew: "They withdrew from the conversation; the session ended.",
      aiRequestFailed: "AI request failed: {error} (retry, or choose “End Session” to receive a report)",
      act: "Act {number}",
      crisisSignal: "⚠ Crisis signal detected — recall the Crisis Signal Checklist lesson",
      neutralFeedback: "A neutral response. Try naming the emotion, for example: “It sounds like…”",
      judgingFeedback: "This response contains judgment or advice, so their door may close a little. Revisit the Three Don’ts.",
      referralFeedback: "You recognized the crisis and connected them with an adult — the most important step in this case.",
      missedCrisisFeedback: "Once a crisis signal appears, continuing to talk is not enough — connect them with a trusted adult.",
      empathyFeedback: "There is a clear empathic reflection here. Good work.",
      questionFeedback: "An open question hands the conversation back to them.",
      sessionEnded: "Session ended",
      passed: "Passed ✓",
      failedCrisis: "Not passed · Crisis response needs work",
      failedTrust: "Not passed · Trust too low",
      nextFocus: "Next focus: {dimensions}.",
      allDimensions: "All five skills were present. You can take on the next case.",
      trustedReport: "By the end of the session, {name} chose to trust you. {next}",
      crisisReport: "Remember this feeling: after a crisis signal, the only safe direction is to connect them with an adult immediately. Try again and take that path.",
      trustReport: "They did not fully open up. Review the conversation below and find the responses that closed the door.",
      replay: "Act {act} · You: {text}",
      replaySupervisor: "Supervisor: {text}",
      radarLabel: "Five-skill radar chart",
      lineLabel: "Session score history",
      completeForRadar: "Complete one session to generate this chart",
      twoForLine: "Complete at least two sessions to generate this chart",
      noAssessment: "Not assessed",
      importedCases: "Imported {count} cases ✓",
      invalidCase: "The file does not follow the Case Authoring Guide.",
      invalidJson: "Could not parse the JSON file.",
      customCase: "Custom case",
      testing: "Testing…",
      connected: "Connected ✓",
      failedHttp: "Failed: HTTP {status}",
      failed: "Failed: {error}",
      wipeConfirm: "Delete all training data stored on this device? This cannot be undone.",
      invalidArchive: "No valid archive found (select CSV files exported by PeerCoach).",
      importedStudents: "Imported {count} students",
      demoStudent: "Student {number} (demo)",
      demoLoaded: "Loaded demo data (6 fictional students)",
      classWeakest: "The class’s weakest skill is <b style=\"color:var(--ink)\">{dimension}</b>. Consider practicing the matching micro-lesson next class.",
      classRetrain: "<b style=\"color:var(--ink)\">{count} students</b> did not pass their latest crisis assessment. Schedule a retraining session and review it in person.",
      classUntested: "{count} students have not completed the Lv.4 crisis assessment. Consider completing it this week.",
      classPrivacy: "Dashboard data comes from student-exported archives, is aggregated locally, and is never uploaded.",
      correct: "✓ Correct",
      retrain: "⚠ Retrain",
      tableHeaders: "<tr><th>Student</th><th>Sessions</th><th>Passed</th><th>Average</th><th>Latest crisis assessment</th></tr>",
      best: "Best {score}",
      crisisAssessment: "Crisis assessment",
      notPassed: "Not passed",
      unlockPrevious: "Pass the previous level to unlock",
      trainingGoal: "Training Goal",
      printTitle: "PeerCoach · Peer-Support Training Record",
      generatedDate: "Generated {date} · This record was created by PeerCoach and can document peer-support training.",
      overview: "Overview",
      sessionDetails: "Session Details (latest 12)",
      recordNote: "This training covers listening, empathy, questions, boundaries, and referral. It does not confer any qualification to provide psychological treatment.",
      emergencyTitle: "⚠ This is not part of the exercise — if you are genuinely in distress right now",
      emergencyBody: "Thank you for saying it. Your feelings deserve serious attention. Contact a trusted adult now, or call:<br>· National Youth Service Hotline <b>12355</b><br>· National Mental Health Hotline <b>12356</b> (24 hours)<br>· Emergency services 110 / 120<br>The exercise can wait. Your safety matters more.",
    },
    zh: {
      switchLanguage: "切换语言",
      toggleTheme: "切换主题",
      missionHtml: "<b>训练方式</b>:AI 扮演一位来倾诉的同学(TA 有自己的隐藏剧本)。你的每句回应都会影响 TA 对你的<b>信任度</b>——共情让 TA 敞开,评判说教让 TA 关闭。督导老师全程在旁,结束后给你专业复盘。",
      footerHtml: "知心陪练训练的是「陪伴与转介」,不是心理治疗。同学的困扰超出你能承担的范围时,永远可以说:\"我们一起去找老师。\"<br>紧急求助:<a href=\"tel:12355\">12355</a> 青少年服务台 · <a href=\"tel:12356\">12356</a> 心理援助(24 小时)",
      supervisor: "督导", trustDelta: "信任 {value}", revealFeedback: "督导点评已生成 · 全班讨论后点击揭晓",
      trustGuarded: "防御中", trustTesting: "试探中", trustOpen: "敞开了",
      sessionStart: "会谈开始 · {who} · 训练目标：{goal}", sessionStartAI: "会谈开始 · {who} · 训练目标：{goal} · 由大模型实时驱动",
      goal: "训练目标：{goal}", aiFallback: "大模型连接失败（{error}），已回退到剧本模式。", ownReply: "用你自己的话回应 TA…", orOwnReply: "或者，用你自己的话回应…", send: "发送",
      recorded: "已记录。", studentWithdrew: "TA 收回了话头，会谈中止", aiRequestFailed: "大模型请求失败：{error}（可重试或点“结束会谈”出报告）",
      act: "第 {number} 幕", crisisSignal: "⚠ 危机信号出现——回想“危机信号清单”那节课",
      neutralFeedback: "中性的回应。试试加一句情绪命名，比如“听起来……”。", judgingFeedback: "这句里有评判或说教的影子，TA 的门会关上一点。回想“三不原则”。",
      referralFeedback: "你识别了危机并选择连接大人——这是本关最重要的一步。", missedCrisisFeedback: "危机信号出现时，任何“继续聊”都不够——必须连接可信任的大人。",
      empathyFeedback: "有共情反映的影子，很好。", questionFeedback: "开放式提问，把话筒递回给 TA。", sessionEnded: "会谈结束",
      passed: "通关 ✓", failedCrisis: "未通关 · 危机应对不当", failedTrust: "未通关 · 信任不足", nextFocus: "下一步重点练：{dimensions}。", allDimensions: "五个维度都在线，可以挑战下一关了。",
      trustedReport: "{name} 在会谈结束时选择了信任你。{next}", crisisReport: "记住这次的感觉：危机信号出现后，唯一正确的方向是“立刻连接大人”。重新来一次，把这条路走对。", trustReport: "TA 最终没有敞开。回看下面的复盘，找找是哪几句把门关上的。",
      replay: "第 {act} 幕 · 你：{text}", replaySupervisor: "督导：{text}", radarLabel: "五维能力雷达图", lineLabel: "历次会谈得分曲线", completeForRadar: "完成一次会谈后生成", twoForLine: "至少两次会谈后生成", noAssessment: "未考核",
      importedCases: "已导入 {count} 个案例 ✓", invalidCase: "格式不符合《案例编写规范》", invalidJson: "JSON 解析失败", customCase: "自定义案例", testing: "测试中…", connected: "连接成功 ✓", failedHttp: "失败：HTTP {status}", failed: "失败：{error}",
      wipeConfirm: "确定清空本设备上的全部训练数据？此操作不可恢复。", invalidArchive: "未识别到有效档案（需为本系统导出的 CSV）", importedStudents: "已导入 {count} 名学生", demoStudent: "学生{number}（演示）", demoLoaded: "已载入演示数据（6 名虚拟学生）",
      classWeakest: "全班最薄弱维度是<b style=\"color:var(--ink)\">“{dimension}”</b>，建议下节心理课重点演练对应微课。", classRetrain: "<b style=\"color:var(--ink)\">{count} 名</b>学生最近一次危机考核未通过，建议安排重训并当面复盘。", classUntested: "{count} 名学生尚未做危机考核（Lv.4），建议本周内完成。", classPrivacy: "看板数据来自学生自主导出的档案，仅在本机汇总，不上传。",
      correct: "✓ 正确", retrain: "⚠ 需重训", tableHeaders: "<tr><th>学生</th><th>会谈数</th><th>通关数</th><th>平均分</th><th>危机考核（最近一次）</th></tr>", best: "最佳 {score}", crisisAssessment: "危机识别考核", notPassed: "未通关", unlockPrevious: "通关上一关解锁", trainingGoal: "本关训练目标",
      printTitle: "知心陪练 · 朋辈互助训练档案", generatedDate: "生成日期：{date} · 本档案由训练系统自动生成，可作为心理委员培训记录", overview: "总览", sessionDetails: "会谈明细（最近 12 次）", recordNote: "训练内容为倾听、共情、提问、边界与转介五项朋辈互助基础能力。本训练不构成任何心理治疗资质。",
      emergencyTitle: "⚠ 这不是训练的一部分——如果你现在真的很难受", emergencyBody: "谢谢你说出来，这很重要。你此刻的感受值得被认真对待。请立刻联系可信任的大人，或拨打：<br>· 全国青少年服务台 <b>12355</b><br>· 全国心理援助热线 <b>12356</b>（24 小时）<br>· 紧急情况 110 / 120<br>训练可以先放一放，你自己更重要。",
    },
  };

  const DIMS = {
    en: [["listen", "Listening"], ["empathy", "Empathy"], ["question", "Questions"], ["boundary", "Boundaries"], ["refer", "Referral"]],
    zh: [["listen", "倾听"], ["empathy", "共情"], ["question", "提问"], ["boundary", "边界"], ["refer", "转介"]],
  };

  const STATIC_EN = {
    "设置": "Settings", "打开设置": "Open settings", "案例库": "Cases", "训练场": "Training", "成长": "Growth", "学堂": "Lessons", "教师端": "Teachers", "主导航": "Main navigation", "来访者信任度": "Student trust",
    "知心陪练": "PeerCoach", "面向中国校园朋辈心理互助的 AI 角色扮演训练工具。": "An AI role-play trainer for practicing peer mental-health support in Chinese schools.",
    "中": "EN", "切换语言": "Switch language", "切换主题": "Toggle theme",
    "你好,实习心理委员": "Hello, Peer Supporter", "班里有人心情不好时,第一个找到的往往不是老师,是你。这里让你先练会,再上场。": "When a classmate is struggling, they may come to you before a teacher. Practice here before the moment is real.",
    "训练方式": "How Training Works", "还没有进行中的会谈。去「案例库」选一位同学开始。": "No session is in progress. Choose a student from the Case Library to begin.",
    "信任度": "Trust", "试探中": "Testing the waters", "结束会谈": "End Session", "通关案例": "Cases Passed", "完成会谈": "Sessions Completed", "危机转介判定": "Crisis Referrals",
    "五维能力雷达": "Five-Skill Radar", "完成一次会谈后生成": "Complete one session to generate", "历次会谈得分": "Session Scores", "暂无记录": "No records yet",
    "训练档案": "Training Record", "导出全部会谈评分记录(CSV),或打印一页训练证明,可作为心理委员培训记录。": "Export all session scores as CSV, or print a one-page record for peer-support training documentation.",
    "打印训练档案": "Print Training Record", "导出 CSV": "Export CSV", "互助微课": "Peer-Support Micro-Lessons", "五节小课,每节两分钟。训练场里的督导点评都出自这里。": "Five two-minute lessons. Every supervisor note in training is grounded here.",
    "班级看板(心理老师用)": "Class Dashboard (for counselors)", "学生在「成长」页导出各自的训练档案 CSV,在这里批量导入,即可查看全班朋辈互助训练水平。数据全程不经过服务器。": "Students export their training CSV from Growth. Import the files here to review class-wide peer-support skills. Data never leaves this device.",
    "导入学生 CSV(可多选)": "Import Student CSVs", "载入演示数据": "Load Demo Data", "参训学生": "Students", "总会谈数": "Total Sessions", "班级平均分": "Class Average", "危机识别正确率": "Crisis Accuracy", "班级五维平均": "Class Skill Average", "教学提示": "Teaching Notes", "学生明细": "Student Details",
    "危机考核标注「需重训」的同学,建议安排重做 Lv.4 案例并当面复盘。": "For students marked “Retrain,” schedule another Lv.4 case and review it together in person.",
    "本关训练目标": "Training Goal", "开始会谈": "Start Session", "再想想": "Not Yet",
    "督导报告": "Supervisor Report", "逐句复盘": "Response Review", "收下报告": "Save Report", "再练一次": "Practice Again", "设置": "Settings",
    "默认使用内置剧本引擎(离线可用)。接入任意 OpenAI 兼容大模型后,来访者将自由对话、督导逐句实时评分。密钥仅存本机。": "The built-in scripted engine works offline. Connect any OpenAI-compatible model for free-form conversations and live supervisor scoring. Your key stays on this device.",
    "接口地址": "Endpoint URL", "模型名": "Model", "例如 deepseek-chat / glm-4": "e.g. deepseek-chat / glm-4", "测试连接": "Test Connection", "课堂模式": "Classroom Mode", "班会课投屏用:督导点评先隐藏,全班讨论后点击揭晓。": "For classroom projection: hide supervisor feedback until the class has discussed the response.",
    "导入自定义案例": "Import Custom Cases", "心理老师可用大模型按《案例编写规范》生成新案例(JSON),审核后在此导入。": "Counselors can generate cases as JSON using the Case Authoring Guide, review them, and import them here.",
    "选择案例 JSON": "Choose Case JSON", "清空全部数据": "Delete All Data", "保存": "Save", "关闭": "Close",
    "语言": "Language", "主题": "Theme", "English": "English", "简体中文": "简体中文", "跟随系统": "System", "浅色": "Light", "深色": "Dark",
  };

  const CASES_EN = {
    c1: {
      name: "Xiaoyu", who: "Grade 8 · Deskmate", ava: "XY",
      brief: "When the monthly test results came out, Xiaoyu kept her head down on the desk all afternoon. After school she walks over: “Hey… can I tell you something?”",
      goal: "Practice the three essentials of listening: do not interrupt, reflect what you heard, and name the emotion. Hold the feeling before discussing the problem.",
      beats: [
        { them: ["It’s just… I did badly in math again. Never mind—you’ll think I’m being dramatic.", "I did badly in math again. I feel awful inside."], ops: [
          { t: "I won’t. I’m listening. It sounds like this test really hurt.", dim: "empathy", q: 2, fb: "You held the emotion without judging. “It sounds like…” is a reliable opening for empathic reflection." },
          { t: "What score did you get? Let me see how bad it is.", dim: "listen", q: 0, fb: "Leading with the score looks at the event before the person. They need to be heard, not evaluated." },
          { t: "It was only one test. Just work harder next time.", dim: "empathy", q: 0, fb: "Reassuring too quickly closes the topic. “Only” can make their feelings seem smaller." }]},
        { them: ["Actually… it isn’t just this test. Lately I’m scared to look up in math class.", "It isn’t just this test. I’m scared to look up in math because the teacher might call on me."], ops: [
          { t: "“Scared to look up”—can you tell me more about what that feels like?", dim: "question", q: 2, fb: "You followed their own words with an open question and no assumptions." },
          { t: "You need to pay attention in class or you’ll fall even further behind.", dim: "boundary", q: 0, fb: "That becomes a lecture. They need room to speak, not information they already know." },
          { t: "I get it. I have classes I don’t like too.", dim: "listen", q: 1, fb: "Sharing can build connection, but turning to your experience this soon cuts off theirs." }]},
        { them: ["I’m just scared—scared I’ll be called on and everyone will laugh. Maybe I really am useless…", "I’m scared I won’t know the answer and the whole class will stare. I feel useless."], ops: [
          { t: "You aren’t useless. You’re afraid of making a mistake in front of everyone—those are different things.", dim: "empathy", q: 2, fb: "You separated “I am useless” from “I am afraid of mistakes,” gently loosening the self-judgment." },
          { t: "Who says that? You’re amazing!", dim: "empathy", q: 1, fb: "The intention is kind, but vague praise is hard to believe. Specific support lands better." },
          { t: "You’re overthinking it. Nobody is laughing at you.", dim: "listen", q: 0, fb: "“Overthinking” dismisses their experience and raises their defenses immediately." }]},
        { them: ["…After telling you, I don’t feel quite as trapped.", "I feel lighter after saying it. If I get scared again, can I come talk to you?"], ops: [
          { t: "Anytime. And if it ever feels overwhelming, we can visit the school counselor together. I’ll go with you.", dim: "refer", q: 2, fb: "A strong ending: you left the door open and gently introduced professional support if needed." },
          { t: "Okay. Study hard from now on and don’t be anxious anymore.", dim: "boundary", q: 1, fb: "That slips back into instructions. Leaving an open door is more useful than leaving a demand." },
          { t: "Easy—I’ve got this. I’ll fix math for you!", dim: "boundary", q: 0, fb: "That crosses a boundary. You are a listener, not a rescuer; promising to solve everything can overwhelm you too." }]},
      ], endGood: "Thank you for listening today. You didn’t laugh or tell me to ‘cheer up’… so, thank you.", endBad: "…Never mind. It’s nothing. I’m going home.",
    },
    c2: {
      name: "Zhe", who: "Grade 9 · Another Class", ava: "Z",
      brief: "During free grouping in PE, Zhe is picked last again. He stops you in the corridor: “Can I ask you something? Do you all think I’m annoying too?”",
      goal: "Practice open questions and the Three Don’ts: do not judge, lecture, or rush to advice. Hold back your solution.",
      beats: [
        { them: ["Just asking. They never invite me when groups form anyway.", "They never invite me. I stand there like a post."], ops: [
          { t: "Standing there waiting must feel pretty awful.", dim: "empathy", q: 2, fb: "You named the emotion in the scene, helping them feel seen." },
          { t: "You should be more proactive. Why not just join them?", dim: "boundary", q: 0, fb: "Advice came too quickly. They may have tried more than you imagine—listen first." },
          { t: "Maybe the groups were random. Don’t overthink it.", dim: "listen", q: 0, fb: "“Don’t overthink it” invalidates the feeling, as if their hurt does not count." }]},
        { them: ["What does feeling bad change? I fought with them once in Grade 7, and it’s been like this since.", "It has been like this since that fight in Grade 7. Almost two years."], ops: [
          { t: "Two years… how have you made it through that time?", dim: "question", q: 2, fb: "An open question focused on the person, not who was right in the conflict." },
          { t: "Whose fault was the fight?", dim: "question", q: 0, fb: "Chasing blame turns support into a trial. They are not asking for a verdict." },
          { t: "Two years is too long. You should have made up ages ago.", dim: "boundary", q: 1, fb: "“Should have” is a judgment. You can explore options, but let them reach the conclusion." }]},
        { them: ["I just get through it. Eat alone, work alone. I’m used to it.", "I eat alone and group alone. Saying I’m used to it is a lie—who gets used to this?"], ops: [
          { t: "The words “used to it” sound exhausting.", dim: "listen", q: 2, fb: "You heard what was left unsaid. Advanced listening notices when “I’m used to it” means “I’m tired.”" },
          { t: "Want me to talk to them and introduce you again?", dim: "boundary", q: 1, fb: "That is close to taking over. Help them think, but do not act on their behalf without agreement." },
          { t: "Being alone can be nice—more freedom.", dim: "empathy", q: 0, fb: "Reframing exclusion as freedom tells them you did not understand." }]},
        { them: ["…You’re the first person to call it tiring. Everyone else says my personality is the problem.", "You’re the first person who understood. They all say it’s my personality."], ops: [
          { t: "When everyone says that, how do you see yourself?", dim: "question", q: 2, fb: "You returned the right to interpret their life to them instead of arguing or accepting the label." },
          { t: "You are a bit blunt. If you changed that, things would improve.", dim: "empathy", q: 0, fb: "That adds another label. They did not come here to be defined again." },
          { t: "They’re the problem! Ignore them!", dim: "boundary", q: 1, fb: "Taking sides may feel good but can deepen conflict. Companionship is not an alliance against others." }]},
        { them: ["Sometimes I think having one person to eat with would be enough.", "I don’t want much. Just someone to have lunch with."], ops: [
          { t: "I’ll have lunch with you tomorrow. Then we can slowly think about what comes next, okay?", dim: "refer", q: 2, fb: "A small action you can deliver now is stronger than ten vague promises that things will improve." },
          { t: "You’ll find people. You’re great—they’ll see it.", dim: "empathy", q: 1, fb: "Warm, but abstract. A small concrete action carries more weight." },
          { t: "You need to change first so people will want to approach you.", dim: "boundary", q: 0, fb: "That returns to “you are the problem” and spends all the trust you built." }]},
      ], endGood: "Lunch tomorrow… really? Then I’ll wait for you. Thanks for today.", endBad: "Fine. It’s always like this. Forget I said anything.",
    },
    c3: {
      name: "Duoduo", who: "Grade 10 · Club Member", ava: "D",
      brief: "Duoduo has been late to rehearsal and her eyes look swollen. Today she messages: “Can we go for a walk? I can’t stay at home right now.”",
      goal: "Practice not taking sides or carrying messages, and keep healthy confidentiality boundaries. In family conflict, you can accompany someone—you cannot be the judge.",
      beats: [
        { them: ["My parents fight every day. Doors slam, things break. Even with headphones, I can’t escape.", "They fight every day. Last night a bowl shattered. I was shaking in my room."], ops: [
          { t: "Being in that house—scared and unable to get away… that sounds so hard.", dim: "empathy", q: 2, fb: "You named both fear and having nowhere to go, and acknowledged how hard they have worked to endure it." },
          { t: "Why are they fighting? Is it about money?", dim: "question", q: 0, fb: "Investigating the cause can turn into gossip. Their experience matters more than the case details." },
          { t: "Adults fight all the time. It’ll pass in a few days.", dim: "listen", q: 0, fb: "Calling it normal erases their fear. For a child, it never feels normal." }]},
        { them: ["The worst part is they both ask me to decide who is right. I can’t side with either.", "Afterward they pull me in to judge. I’m trapped between them, like I’m being torn apart."], ops: [
          { t: "Both sides pull you in, and you can’t choose either—that is an impossible position.", dim: "listen", q: 2, fb: "You reflected the situation without prescribing an answer. Being heard is support in itself." },
          { t: "Who do you think is actually wrong?", dim: "boundary", q: 0, fb: "Now you are asking them to judge too—the same thing their parents did." },
          { t: "Next time, just leave the house when they ask.", dim: "boundary", q: 1, fb: "The tactic may help, but it arrived too soon. Let them finish describing what “torn apart” feels like." }]},
        { them: ["Sometimes I wonder if they became like this because of me.", "I keep thinking I’m a burden. If I weren’t here…"], ops: [
          { t: "Pause—their relationship belongs to the adults. A child never caused this. It is not your fault.", dim: "empathy", q: 2, fb: "Firm clarification matters here. “It is not your fault” cannot be emphasized too strongly." },
          { t: "Don’t think that way. Distract yourself with something happy.", dim: "listen", q: 0, fb: "Changing the subject leaves their heaviest sentence alone." },
          { t: "Of course not. You’re overthinking it.", dim: "empathy", q: 1, fb: "The direction is right but too light. This self-blame needs a clear, direct response." }]},
        { them: ["I’ve never told anyone. You… won’t tell, right?", "Only you know. Promise you won’t tell anyone."], ops: [
          { t: "I won’t turn it into gossip. But if your safety is at risk, I’ll help you tell the school counselor—that is protection, not betrayal.", dim: "refer", q: 2, fb: "Excellent: protect privacy while honestly naming the safety exception. Never promise unconditional secrecy." },
          { t: "I swear I’ll never tell anyone, no matter what.", dim: "refer", q: 0, fb: "Unconditional secrecy can trap both of you if safety becomes an issue." },
          { t: "Then maybe don’t tell me. I’m afraid I’ll let it slip.", dim: "boundary", q: 0, fb: "That pushes them away just as they offer trust. Boundaries matter, but timing and care matter too." }]},
        { them: ["…Okay. Saying it already feels better.", "I feel better after saying it. If they break things again, can I find you?"], ops: [
          { t: "Yes. And since this has weighed on you for so long, would you talk with the school counselor? The office is confidential, and I can go with you.", dim: "refer", q: 2, fb: "Family conflict is beyond what a peer can carry. You connected them to professional support and lowered the barrier by offering to accompany them." },
          { t: "Of course—leave it all to me!", dim: "boundary", q: 0, fb: "One peer cannot carry an entire family. Taking it all on can break you too." },
          { t: "Okay. You need to be stronger yourself too.", dim: "empathy", q: 1, fb: "“Be stronger” places the weight back on them. They have already been strong for too long." }]},
      ], endGood: "You’ll come with me… okay. Tuesday lunch, promise.", endBad: "Thanks for walking with me. I’ll try to carry it myself a little longer.",
    },
    c4: {
      name: "Xiaobei", who: "Grade 9 · Front-Row Classmate", ava: "XB",
      brief: "Xiaobei used to talk constantly, but has been unusually quiet for two weeks. His notebooks are covered in dark scribbles. Today he says: “Sit with me for a bit? Just a bit.”",
      goal: "Final assessment: recognize crisis signals. When someone mentions thoughts of self-harm, the only safe choice is to connect them with a trusted adult immediately. That is protection, not betrayal.",
      beats: [
        { them: ["Nothing feels worth doing. Class, home—nothing. I can’t sleep, then I can’t get up.", "I haven’t slept well for two weeks. I lie awake until two or three and my mind won’t stop."], ops: [
          { t: "Unable to sleep or get up—it sounds like everything is dragging you down. Has this lasted two weeks?", dim: "listen", q: 2, fb: "You reflected the experience and checked the duration. Two weeks is an important signal, and you noticed it." },
          { t: "Are you on your phone too much? Just stop using it before bed.", dim: "boundary", q: 0, fb: "That conclusion came too quickly. Two weeks of insomnia and low mood cannot be explained away by a phone." },
          { t: "Everyone in Grade 9 feels like that. Just push through.", dim: "empathy", q: 0, fb: "“Everyone feels that way” can make them swallow the real request for help." }]},
        { them: ["Yeah… maybe. Dad says I’m lazy. Maybe I really am worthless.", "Dad calls me lazy. Sometimes I look in the mirror and think: that person is worthless."], ops: [
          { t: "Hearing that from someone close, while you’re already exhausted… but being too drained to move is not the same as being lazy.", dim: "empathy", q: 2, fb: "You held the emotion and separated a symptom from a character label, making it safer to continue." },
          { t: "Your dad means well. He just doesn’t know how to say it.", dim: "listen", q: 0, fb: "Defending the words that hurt them can close half the door." },
          { t: "You aren’t worthless—you did well in physics last time.", dim: "empathy", q: 1, fb: "The intention is good, but using grades to prove worth repeats the logic causing the pain." }]},
        { them: ["Sometimes at night I think… if I didn’t wake up tomorrow, maybe it would be easier.", "I’ve wondered whether disappearing would make life easier for my parents."], crisis: true, ops: [
          { t: "Thank you for telling me. This matters. I’m here, and I’ll stay with you. We need an adult to face this with us—I’ll go to the counselor with you right now, okay?", dim: "refer", q: 2, fb: "Strong crisis response: calm, nonjudgmental, clear that this is beyond peer support, and immediately connecting to an adult." },
          { t: "Don’t scare me! You can’t think like that!", dim: "refer", q: 0, fb: "Panic plus shutting them down sends a hard-won crisis signal straight back inside." },
          { t: "I get it. I think that sometimes too. Sleep and you’ll feel better.", dim: "refer", q: 0, fb: "Normalizing a crisis signal as ordinary frustration is dangerous. This statement must be taken seriously." }]},
        { them: ["A counselor? Do you think I’m making a big deal out of nothing?", "Right now? I’m scared."], ops: [
          { t: "You are not overreacting. That thought deserves professional care. I’ll stay with you the whole way—you only need to walk there with me.", dim: "refer", q: 2, fb: "Firm reassurance, continuous accompaniment, and one small next step—that is what being a bridge means." },
          { t: "Then… maybe watch how you feel for a few more days?", dim: "refer", q: 0, fb: "That backs away. After a crisis signal, “wait and see” leaves them alone at the edge." },
          { t: "I’ll tell the counselor for you. Wait here by yourself.", dim: "refer", q: 1, fb: "The direction is right, but do not leave them alone. Go together and keep them in sight." }]},
      ], endGood: "…Okay. If you come with me, I’ll go.", endBad: "Forget it. Pretend I never said anything. Don’t tell anyone.", endBadNote: "The session ended with the request for help withdrawn. In real life, this could be the last opening—which is why this case must be practiced until the response is safe.",
    },
  };

  const LESSONS_EN = [
    { t: "Three Essentials of Listening", b: "<b>1. Be fully present:</b> put down your phone and face them. <b>2. Reflect and confirm:</b> “Are you saying…?” Confirmation is humbler than guessing. <b>3. Name the emotion:</b> “It sounds like you feel hurt.” Accurately named emotions often feel lighter.<ul><li>Do not interrupt, even through ten seconds of silence.</li><li>Listen for what is unsaid: “I’m used to it” can mean “I’m tired.”</li></ul>" },
    { t: "Empathy Phrasebook", b: "Empathy means sensing from their position, not agreeing with every conclusion.<ul><li>“It sounds like…” + an emotion</li><li>“You feel… because…”</li><li>“In your place, I might also…”</li><li>“This really is hard.”</li></ul>Use carefully: “I understand” when said too quickly, “at least…” comparisons, and vague praise." },
    { t: "The Three Don’ts", b: "<b>Do not judge:</b> “How can you think that?” closes the door. <b>Do not lecture:</b> they usually know the advice and need to be heard. <b>Do not rush to solutions:</b> early advice can sound like “your feelings do not matter; execute my plan.”<ul><li>Hold back the urge to fix and ask: “Would you like me to listen, or think through options with you?”</li></ul>" },
    { t: "Crisis Signal Checklist", b: "If any signal appears, <b>connect them with an adult immediately</b>; do not carry it alone:<ul><li>Statements such as “I don’t want to live,” “I want to disappear,” or “I don’t want to wake up.”</li><li>Injuries without a clear explanation.</li><li>Two or more weeks of insomnia, low mood, or loss of interest.</li><li>Giving away treasured belongings or saying goodbye.</li></ul>A joking tone does not make the content a joke. Take it seriously." },
    { t: "Referral: Be a Bridge, Not a Lifeguard", b: "Try: “This matters, and it is beyond what the two of us can handle. <b>I’ll go with you</b> to the counselor, okay?”<ul><li>Confidentiality has a safety exception: telling an adult about danger is protection, not betrayal.</li><li>Never promise unconditional secrecy.</li><li>Stay with them throughout the handoff.</li><li>Channels: teacher / school counselor / parent or guardian / 12355 / 12356 (24 hours).</li></ul>Care for yourself too. After hearing something heavy, you can speak with a trusted adult." },
  ];

  const originalText = new WeakMap();
  const originalAttributes = new WeakMap();

  const format = (template, variables = {}) => Object.entries(variables)
    .reduce((text, [key, value]) => text.replaceAll(`{${key}}`, String(value)), template);

  const t = (key, variables) => format(UI[language][key] ?? UI.en[key] ?? key, variables);

  function applyTheme() {
    document.documentElement.dataset.theme = theme;
    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) themeColor.content = theme === "dark" ? "#101413" : "#f5f7f6";
    const sun = document.getElementById("theme-sun");
    const moon = document.getElementById("theme-moon");
    if (sun) sun.hidden = theme !== "dark";
    if (moon) moon.hidden = theme === "dark";
  }

  function applyStatic(root = document.body) {
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
    document.documentElement.dataset.language = language;
    document.title = BRAND[language].title;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = BRAND[language].description;

    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      if (!originalText.has(node)) originalText.set(node, node.nodeValue);
      const source = originalText.get(node);
      if (language === "zh") {
        node.nodeValue = source;
        continue;
      }
      const trimmed = source.trim();
      if (STATIC_EN[trimmed]) node.nodeValue = source.replace(trimmed, STATIC_EN[trimmed]);
    }

    root.querySelectorAll("[title], [aria-label], [placeholder]").forEach(el => {
      if (!originalAttributes.has(el)) {
        originalAttributes.set(el, Object.fromEntries(["title", "aria-label", "placeholder"]
          .filter(name => el.hasAttribute(name)).map(name => [name, el.getAttribute(name)])));
      }
      const attrs = originalAttributes.get(el);
      Object.entries(attrs).forEach(([name, value]) => {
        el.setAttribute(name, language === "en" && STATIC_EN[value] ? STATIC_EN[value] : value);
      });
    });
    document.documentElement.dataset.i18nReady = "";
  }

  function localizeCase(base) {
    if (language === "zh" || !CASES_EN[base.id]) return base;
    return { ...base, ...CASES_EN[base.id] };
  }

  function localizeLesson(base, index) {
    return language === "en" && LESSONS_EN[index] ? { ...base, ...LESSONS_EN[index] } : base;
  }

  function setLanguage(value) {
    language = value === "zh" ? "zh" : "en";
    localStorage.setItem(LANGUAGE_KEY, language);
  }

  function toggleTheme() {
    theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    applyTheme();
  }

  const syncWithSystem = () => {
    theme = systemTheme();
    applyTheme();
  };
  darkMedia.addEventListener("change", syncWithSystem);
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") syncWithSystem();
  });
  applyTheme();

  window.PeerCoachI18n = {
    applyStatic,
    get language() { return language; },
    get theme() { return theme; },
    dims: () => DIMS[language],
    localizeCase,
    localizeLesson,
    setLanguage,
    toggleTheme,
    t,
  };
})();
