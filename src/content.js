import { CONFIG as C } from "./config.js";

export const UI = {
  ar: {
    dir: "rtl",
    nav: {
      home: "الرئيسية",
      privacy: "سياسة الخصوصية",
      terms: "الشروط والأحكام",
      delete: "حذف الحساب",
      support: "الدعم والمساعدة",
    },
    updated: "آخر تحديث",
    homeTitle: "بوابة السياسات والخصوصية",
    homeSub: `السياسات الرسمية وشروط الاستخدام ومعايير أمان البيانات لتطبيق ${C.appName}.`,
    open: "عرض التفاصيل",
    footer: `© ${new Date().getFullYear()} ${C.companyName}. جميع الحقوق محفوظة.`,
    langBtn: "English",
  },
  en: {
    dir: "ltr",
    nav: {
      home: "Home",
      privacy: "Privacy Policy",
      terms: "Terms & Conditions",
      delete: "Delete Account",
      support: "Support & Contact",
    },
    updated: "Last updated",
    homeTitle: "Legal & Privacy Center",
    homeSub: `Official policies, terms of service, and data safety standards for ${C.appNameEn}.`,
    open: "View details",
    footer: `© ${new Date().getFullYear()} ${C.companyNameEn}. All rights reserved.`,
    langBtn: "العربية",
    badge: "Smart Job Discovery & Career Growth Platform",
  },
};

export const PAGES = {
  privacy: {
    ar: {
      title: "سياسة الخصوصية",
      sections: [
        {
          h: "1. مقدمة ونطاق السياسة",
          p: [
            `نحن في ${C.companyName} نولي سرية وأمان بياناتك أهمية قصوى. تهدف هذه السياسة إلى توضيح كيفية جمع واستخدام وحماية البيانات الشخصية والمهنية لمستخدمي تطبيق ${C.appName}، المنصة المتخصصة في مساعدة الباحثين عن عمل على استكشاف الوظائف المناسبة، وتحليل فجوات المهارات، والتوجيه المهني المدعوم بالذكاء الاصطناعي.`,
            "باستخدامك للتطبيق أو إنشاء حساب فيه، فإنك تقر وتوافق على ممارسات جمع البيانات واستخدامها وفقًا لما هو موضح في هذه الوثيقة.",
          ],
        },
        {
          h: "2. المعلومات والبيانات التي نقوم بجمعها",
          p: ["لتقديم تجربة توظيف وإرشاد مهني متكاملة وذكية، قد نقوم بجمع الأنواع التالية من البيانات:"],
          ul: [
            "معلومات الحساب والتسجيل: الاسم الكامل، عنوان البريد الإلكتروني، رقم الهاتف، كلمة المرور المشفّرة، ومعلومات الحساب عند تسجيل الدخول عبر Google Sign-In.",
            "الملف المهني والسيرة الذاتية (CV): المهارات التقنية والشخصية، الخبرات العملية السابقة، المؤهلات والشهادات التعليمية، ملف السيرة الذاتية المرفوع بصيغ (PDF أو DOCX)، وروابط الأعمال (مثل LinkedIn وGitHub).",
            "التفضيلات المهنية: المسمى الوظيفي المستهدف، قطاعات العمل المفضلة، نطاق الرواتب المتوقع، ونوع العمل المفضل (عن بُعد، هجين، أو دوام كامل).",
            "بيانات التفاعل مع الذكاء الاصطناعي (AI Mentor & Matching): الأسئلة والاستفسارات الموجهة للمساعد الذكي، نتائج تحليل ملاءمة الوظائف (Match Score)، ومسارات التعلم (Roadmaps) المتبعة.",
            "بيانات التسجيل الصوتي: عند استخدام الإدخال الصوتي وميزة التعرف على الصوت للتحدث مع المرشد الذكي داخل التطبيق (فقط بموافقتك أثناء الاستخدام المباشر).",
            "معلومات الجهاز والاستخدام: نوع وطراز الجهاز، إصدار نظام التشغيل (Android/iOS)، معرّفات الجهاز الفريدة، عنوان IP، سجلات الأخطاء والأعطال (Crash Logs)، وإحصائيات تفاعلك مع واجهات التطبيق.",
          ],
        },
        {
          h: "3. أذونات التطبيق وكيفية استخدامها",
          p: ["يطلب تطبيق MatchIn أذونات محددة فقط عندما تتطلب الميزة ذلك فعلياً:"],
          ul: [
            "الكاميرا ومعرض الصور (Camera & Media Storage): لتمكينك من التقاط أو اختيار صورتك الشخصية للملف التعريفي، أو اختيار ملفات السيرة الذاتية من جهازك.",
            "الميكروفون (Record Audio): فقط لتشغيل ميزة التحدث المباشر والتعرف على الصوت عند توجيه أسئلة لمرشد التوظيف الذكي.",
            "الإشعارات الفورية (Post Notifications): لإرسال تنبيهات هامة حول الوظائف الجديدة المطابقة، وتحديثات حالة طلبات التقديم، والتذكيرات الخاصة بخطط التعلم.",
            "الوصول للإنترنت وحالة الشبكة (Internet & Network State): للاتصال الآمن بخوادم التطبيق وخدمات السحابة وتحديث البيانات بشكل فوري.",
          ],
        },
        {
          h: "4. كيف نستخدم معلوماتك وبياناتك",
          p: ["نستخدم البيانات المجمعة للأغراض المشروعة التالية:"],
          ul: [
            "حساب نسبة مطابقة الوظائف (AI Match Percentage) وتزويدك بتوصيات وظائف مخصصة تناسب ملفك المهني.",
            "تحليل فجوات المهارات وإنشاء خطط تعلم مخصصة (Roadmaps) لتأهيلك للوظائف المستهدفة.",
            "تسهيل التقديم على الوظائف ومتابعة سجل وحالة طلبات التقديم الخاصة بك.",
            "تشغيل المرشد المهني الذكي (AI Mentor) والإجابة على استفساراتك التطويرية.",
            "إدارة حسابك والتحقق من هويتك وتأمين عمليات الدخول.",
            "إرسال الإشعارات والتنبيهات الخاصة بالفرص الوظيفية والتحديثات الهامة.",
            "تحسين أداء واستقرار التطبيق، وتصحيح المشاكل التقنية ومنع الأنشطة الاحتيالية.",
          ],
        },
        {
          h: "5. خدمات الطرف الثالث (Third-Party Services)",
          p: ["قد نعتمد على خدمات خارجية موثوقة تساعدنا في تقديم خدمات التطبيق وصيانتها، وتخضع لمعايير أمان صارمة، وتشمل:"],
          ul: [
            "Firebase من Google: لإدارة وتوثيق الحسابات (Firebase Auth)، وتخزين البيانات سحابياً (Cloud Firestore)، وإرسال الإشعارات (Firebase Cloud Messaging).",
            "Google Sign-In: لتسهيل تسجيل الدخول الآمن بحساب Google.",
            "خدمات Google Mobile Ads (AdMob): لعرض إعلانات غير متطفلة ومطابقة لسياسات Google.",
            "خدمات التعرّف على الصوت والذكاء الاصطناعي لمعالجة استفسارات المساعد الذكي.",
            "خوادم الاستضافة الآمنة وشبكات توصيل المحتوى عبر بروتوكولات التشفير HTTPS.",
          ],
        },
        {
          h: "6. مشاركة البيانات والسرية",
          p: [
            "نحن لا نقوم ببيع أو تأجير بياناتك الشخصية أو المهنية لأي أطراف ثالثة لأغراض تسويقية على الإطلاق.",
            "تتم مشاركة بيانات سيرتك الذاتية ومعلوماتك المهنية فقط مع أصحاب العمل والشركات التي تختار أنت التقديم على وظائفها بشكل اختياري وصريح.",
          ],
        },
        {
          h: "7. أمان البيانات وتخزينها",
          p: [
            "نطبق بروتوكولات ومعايير أمنية متقدمة تشمل التشفير أثناء النقل (TLS/HTTPS) والتشفير أثناء التخزين، وحماية قواعد البيانات بإجراءات حوكمة صارمة لمنع الوصول غير المصرح به.",
            "رغم جهودنا المستمرة لحماية بياناتك، نلفت انتباهك إلى أنه لا توجد طريقة نقل أو تخزين إلكتروني آمنة بنسبة 100%، لذا نشجعك دائماً على اختيار كلمة مرور قوية والحفاظ على سرية بياناتك.",
          ],
        },
        {
          h: "8. خصوصية الأطفال والقُصّر",
          p: [
            "تطبيق MatchIn موجّه للباحثين عن عمل والمهنيين، وهو غير مخصص للأطفال دون سن 13 عاماً (أو السن القانونية المحددة في بلدك). نحن لا نقوم بجمع بيانات الأطفال عن قصد، وإذا تبيّن لنا تسجيل أي بيانات تخص طفلاً فسيتم حذفها فوراً.",
          ],
        },
        {
          h: "9. حقوقك وخياراتك في إدارة بياناتك",
          ul: [
            "الاطلاع على جميع بيانات ملفك الشخصي وتحديثها في أي وقت من شاشة الملف الشخصي.",
            "التحكم في الأذونات (مثل الكاميرا والميكروفون والإشعارات) من خلال إعدادات نظام جهازك.",
            "طلب نسخة من بياناتك أو طلب حذف حسابك وبياناتك نهائياً.",
          ],
        },
        {
          h: "10. تواصل معنا والاستفسارات",
          p: [
            `إذا كانت لديك أي استفسارات أو ملاحظات بخصوص سياسة الخصوصية، يمكنك التواصل مع فريق الدعم الفني عبر البريد الإلكتروني: ${C.email}`,
          ],
        },
      ],
    },
    en: {
      title: "Privacy Policy",
      sections: [
        {
          h: "1. Introduction & Scope",
          p: [
            `${C.companyNameEn} is dedicated to protecting your privacy and securing your personal and professional data. This Privacy Policy explains how ${C.appNameEn} collects, uses, and safeguards information across our smart job discovery, skill-gap analysis, and AI career mentorship platform.`,
            "By accessing, registering, or using MatchIn, you acknowledge and agree to the practices outlined in this policy.",
          ],
        },
        {
          h: "2. Information We Collect",
          p: ["To provide an intelligent, tailored career and job-matching experience, we may collect:"],
          ul: [
            "Account Information: Full name, email address, phone number, encrypted password, and Google profile details when authenticating via Google Sign-In.",
            "Career Profile & Resume (CV): Work experience, technical and soft skills, educational background, certifications, uploaded CV documents (PDF / DOCX), portfolio URLs, and social links (e.g. LinkedIn, GitHub).",
            "Career Preferences: Target job titles, industry preferences, expected salary ranges, and preferred work arrangements (remote, hybrid, or on-site).",
            "AI Interaction & Matching Data: Queries submitted to the AI Mentor, calculated job match percentages, and learning roadmap progress.",
            "Voice & Audio Data: Captured strictly when you utilize voice input features to converse with the AI Mentor (processed only with your explicit permission during live use).",
            "Device & Analytics Information: Device model, operating system version, unique device identifiers, IP address, crash logs, and anonymized feature interaction metrics.",
          ],
        },
        {
          h: "3. App Permissions & Justifications",
          p: ["MatchIn requests mobile operating system permissions only when necessary for specific features:"],
          ul: [
            "Camera & Media Storage (Photos/Documents): To enable you to take or select a profile photo and upload CV/resume files from your device.",
            "Microphone (Record Audio): Exclusively for real-time speech recognition and voice input when asking questions to the AI Mentor.",
            "Push Notifications (Post Notifications): To deliver critical alerts regarding matching jobs, application status updates, and roadmap reminders.",
            "Network State & Internet Access: To maintain a secure, encrypted connection with our cloud services and API endpoints.",
          ],
        },
        {
          h: "4. How We Use Your Information",
          p: ["We process collected information for legitimate and necessary platform functions:"],
          ul: [
            "Calculating smart AI match percentages between candidate profiles and job postings.",
            "Conducting skill-gap analysis and generating personalized career roadmaps.",
            "Facilitating seamless job applications and tracking application statuses.",
            "Powering the AI Mentor chatbot to assist with interview preparation and career questions.",
            "Authenticating user identities and securing accounts against unauthorized access.",
            "Sending real-time job alerts and essential service updates.",
            "Monitoring platform performance, resolving technical errors, and preventing fraudulent activity.",
          ],
        },
        {
          h: "5. Third-Party Services & Integrations",
          p: ["We partner with reliable third-party providers bound by rigorous data security standards, including:"],
          ul: [
            "Google Firebase: For secure authentication (Firebase Auth), cloud data storage (Cloud Firestore), and push notification delivery (Firebase Cloud Messaging).",
            "Google Sign-In: For streamlined and secure OAuth authentication.",
            "Google Mobile Ads (AdMob): For displaying non-intrusive, compliant advertisements.",
            "Speech recognition and AI services for processing conversational career queries.",
            "Encrypted cloud hosting facilities operating via TLS/HTTPS protocols.",
          ],
        },
        {
          h: "6. Data Sharing & Non-Sale Policy",
          p: [
            "We do not sell, rent, or trade your personal or career data to any third party for marketing purposes.",
            "Your CV and career credentials are only shared with recruiters and employers when you actively choose to submit an application for their posted openings.",
          ],
        },
        {
          h: "7. Data Security & Storage",
          p: [
            "We employ industry-standard technical, administrative, and physical measures, including end-to-end transport layer security (HTTPS/TLS) and encrypted data storage.",
            "While we strive to use commercially acceptable means to protect your information, no method of transmission over the Internet is 100% secure.",
          ],
        },
        {
          h: "8. Children's Privacy",
          p: [
            "MatchIn is intended for job seekers and career professionals. It is not designed for children under the age of 13. We do not knowingly collect personal data from minors.",
          ],
        },
        {
          h: "9. Your Privacy Rights",
          ul: [
            "Review and edit your profile information at any time within the app.",
            "Manage app permissions (Camera, Microphone, Notifications) via your device settings.",
            "Request complete deletion of your account and all associated data.",
          ],
        },
        {
          h: "10. Contact Us",
          p: [
            `If you have questions, feedback, or concerns regarding this policy, please reach out to our dedicated support team at: ${C.email}`,
          ],
        },
      ],
    },
  },

  terms: {
    ar: {
      title: "الشروط والأحكام",
      sections: [
        {
          h: "1. الموافقة على الشروط",
          p: [
            `مرحباً بك في منصة ${C.appName}. تحكم هذه الشروط والأحكام استخدامك للتطبيق وجميع الخدمات المرتبطة به. بإنشاء حساب أو استخدام التطبيق، فإنك توافق على الالتزام الكامل بهذه الشروط والسياسات التابعة لها.`,
          ],
        },
        {
          h: "2. حساب المستخدم والأمان",
          ul: [
            "أنت مسؤول عن الحفاظ على سرية بيانات حسابك وكلمة المرور، وعن جميع الأنشطة التي تتم من خلال حسابك.",
            "يجب تقديم معلومات دقيقة ومحدثة وصحيحة عند إنشاء حسابك وتعبئة سيرتك الذاتية.",
            "يُحظر انتحال شخصية أي فرد آخر أو الادعاء بامتلاك مؤهلات أو شهادات أو خبرات غير صحيحة.",
            "يحق لإدارة التطبيق إيقاف أو حذف أي حساب يخالف هذه الشروط أو يثبت تقديمه لبيانات وهمية.",
          ],
        },
        {
          h: "3. الاستخدام المقبول للمنصة",
          p: ["يوافق المستخدم على عدم استخدام التطبيق في أي من الأغراض التالية:"],
          ul: [
            "التقديم العشوائي والمزعج (Spam) أو إرسال طلبات احتيالية.",
            "محاولة اختراق أنظمة التطبيق أو إجراء هندسة عكسية لبرمجياته أو كود المصدر.",
            "نشر أي محتوى غير قانوني أو ينتهك حقوق الملكية الفكرية لأي طرف.",
            "استخدام روبوتات أو برامج آلية (Scraping) لجمع بيانات الوظائف أو المستخدمين.",
          ],
        },
        {
          h: "4. ميزات الذكاء الاصطناعي والإرشاد المهني",
          p: [
            "يقدم تطبيق MatchIn أدوات ذكاء اصطناعي تشمل حساب نسبة المطابقة الوظيفية (Job Fit Analysis)، تحليل المهارات، ومرشد التطوير المهني (AI Mentor).",
            "مخرجات الذكاء الاصطناعي هي أدوات توجيهية واستشارية فقط لدعم قراراتك المهنية، ولا تضمن الحصول على وظيفة معينة ولا تشكل بديلاً عن التقييم البشري المستقل لأصحاب العمل.",
          ],
        },
        {
          h: "5. الملكية الفكرية",
          p: [
            `جميع حقوق التصميم، العلامة التجارية (${C.appNameEn})، الشعار، الأكواد البرمجية، والمحتوى الحصري هي ملكية خاصة لـ ${C.companyName} ومحمية بموجب قوانين الملكية الفكرية المعمول بها.`,
            "يحتفظ المستخدم بملكية سيرته الذاتية والمحتوى الذي يرفعه، مع منح المنصة ترخيصاً تقنياً لاستضافته ومعالجته لغرض تقديم الخدمة والتوصيل مع الوظائف.",
          ],
        },
        {
          h: "6. إخلاء المسؤولية وحدودها",
          p: [
            "يتم تقديم خدمات التطبيق «كما هي» و«وفقاً للمتاح»، دون أي ضمانات صريحة أو ضمنية بخلو الخدمة من الأعطال المؤقتة.",
            "لا تضمن المنصة صحة الوظائف الخارجية أو قرارات القبول والرفض من قِبل الشركات وأصحاب العمل.",
          ],
        },
        {
          h: "7. القانون المطبق وحل النزاعات",
          p: [
            `تخضع هذه الشروط والأحكام وتفسر وفقاً للقوانين واللوائح السارية في ${C.country}.`,
          ],
        },
        {
          h: "8. التواصل والدعم",
          p: [`لأي استفسار يتعلق بالشروط والأحكام: ${C.email}`],
        },
      ],
    },
    en: {
      title: "Terms & Conditions",
      sections: [
        {
          h: "1. Acceptance of Terms",
          p: [
            `Welcome to ${C.appNameEn}. These Terms & Conditions govern your access to and use of our mobile application and related career services. By registering or using the platform, you agree to be bound by these Terms.`,
          ],
        },
        {
          h: "2. User Accounts & Responsibilities",
          ul: [
            "You are responsible for maintaining the confidentiality of your login credentials and for all activities under your account.",
            "You agree to provide true, accurate, and up-to-date professional credentials in your profile and CV.",
            "Impersonating another person or fabricating degrees, work history, or technical qualifications is strictly prohibited.",
            "We reserve the right to suspend or terminate accounts that breach these terms or engage in fraudulent submissions.",
          ],
        },
        {
          h: "3. Acceptable Use Policy",
          p: ["You agree not to use the application to:"],
          ul: [
            "Submit spam, duplicate, or fraudulent job applications.",
            "Attempt unauthorized access, reverse-engineering, or disruption of backend systems.",
            "Post or transmit offensive, infringing, or harmful content.",
            "Scrape, harvest, or crawl job postings or user profiles via automated scripts or bots.",
          ],
        },
        {
          h: "4. AI Features & Mentorship Disclaimer",
          p: [
            "MatchIn incorporates artificial intelligence for job-match percentage calculations, skill-gap detection, and interactive AI career mentorship.",
            "AI-generated recommendations and career advice are provided as guidance tools and do not constitute employment guarantees or contractual hiring commitments from employers.",
          ],
        },
        {
          h: "5. Intellectual Property Rights",
          p: [
            `All software, interfaces, logos, brand assets, and proprietary algorithms belong exclusively to ${C.companyNameEn} and are protected by applicable intellectual property laws.`,
            "You retain full ownership of your uploaded CV and portfolio files, granting us a limited operational license to display and match them with relevant job openings.",
          ],
        },
        {
          h: "6. Limitation of Liability",
          p: [
            "The platform is provided on an \"AS IS\" and \"AS AVAILABLE\" basis. While we strive for peak uptime and accuracy, we do not warrant uninterrupted operation.",
            "MatchIn is not liable for hiring decisions, employment terms, or interview outcomes managed by independent employers.",
          ],
        },
        {
          h: "7. Governing Law",
          p: [
            `These Terms shall be governed by and construed in accordance with the laws of ${C.countryEn}.`,
          ],
        },
        {
          h: "8. Inquiries & Contact",
          p: [`For any questions regarding these Terms: ${C.email}`],
        },
      ],
    },
  },

  delete: {
    ar: {
      title: "حذف الحساب والبيانات (Google Play Data Safety)",
      sections: [
        {
          h: "التزامنا بحقك في حذف بياناتك",
          p: [
            `وفقاً لسياسات أمان البيانات في Google Play والقوانين الدولية لحماية الخصوصية، يمنحك تطبيق ${C.appName} السيطرة الكاملة على بياناتك الشخصية والمهنية، بما في ذلك حق حذف الحساب نهائياً مع كافة البيانات المرتبطة به في أي وقت وبكل سهولة.`,
          ],
        },
        {
          h: "طرق حذف الحساب المتاحة",
          p: ["يمكنك إتمام عملية حذف الحساب بأي من الطريقتين التاليتين:"],
          ul: [
            "الطريقة الأولى (من داخل التطبيق مباشرة): افتح تطبيق MatchIn ← انتقل إلى شاشة «الإعدادات» (Settings) ← اختر «الحساب» (Account) ← اضغط على «حذف الحساب» (Delete Account) وقم بالتأكيد.",
            `الطريقة الثانية (عبر البريد الإلكتروني): إرسال رسالة من بريدك الإلكتروني المسجل في التطبيق إلى ${C.email} بعنوان «طلب حذف الحساب - Delete Account Request» مع كتابة اسم المستخدم أو البريد المسجل.`,
          ],
        },
        {
          h: "البيانات التي يتم حذفها نهائياً وفوراً",
          p: ["بمجرد تنفيذ طلب حذف الحساب، نقوم بحذف البيانات التالية بصورة دائمة من خوادمنا وقواعد البيانات:"],
          ul: [
            "معلومات الحساب الشخصية: الاسم، البريد الإلكتروني، رقم الهاتف، والصورة الشخصية.",
            "ملفات السيرة الذاتية (CV): كافة المستندات والملفات المرفوعة بصيغ PDF أو DOCX.",
            "الملف المهني: المهارات، الشهادات، الخبرات السابقة، والتفضيلات الوظيفية.",
            "سجل التقديم على الوظائف وتفاعلات الوظائف المحفوظة.",
            "محادثات وسجلات المرشد الذكي (AI Mentor Chat History) ومسارات التعلم (Roadmaps).",
            "معرّفات الأجهزة ورموز الإشعارات (FCM Tokens) المرتبطة بحسابك.",
          ],
        },
        {
          h: "البيانات التي قد يُحتفظ بها مؤقتاً والمدة الزمنية",
          p: [
            "قد يتم الاحتفاظ ببعض سجلات الأمان أو العمليات الحسابية المجمعة مجهولة الهوية لفترة محدودة أقصاها 30 يوماً إذا كان ذلك واجباً بموجب المتطلبات القانونية أو لمنع الاحتيال، وبعدها تُحذف بالكامل.",
            "يتم معالجة وتنفيذ طلب الحذف عبر البريد الإلكتروني في غضون 7 أيام عمل، بينما يتم الحذف فوراً عند إجرائه من داخل التطبيق.",
          ],
        },
      ],
    },
    en: {
      title: "Account & Data Deletion (Google Play Data Safety)",
      sections: [
        {
          h: "Our Commitment to Data Erasure",
          p: [
            `In full compliance with Google Play's Data Safety requirements and international data protection standards, ${C.appNameEn} provides users with complete autonomy over their personal and career data, including the right to permanently erase their account and all associated records at any time.`,
          ],
        },
        {
          h: "How to Request Account Deletion",
          p: ["You can delete your account and personal records using either of the following methods:"],
          ul: [
            "Option 1 (Directly within the App): Open the MatchIn app → Go to Settings → Select Account → Tap \"Delete Account\" and confirm your choice.",
            `Option 2 (Via Email Request): Send an email from your registered email address to ${C.email} with the subject line \"Account Deletion Request\" including your registered account email and username.`,
          ],
        },
        {
          h: "Data Subject to Permanent Deletion",
          p: ["Upon processing your deletion request, the following information is permanently purged from our active databases:"],
          ul: [
            "Personal Profile Data: Name, email address, phone number, and avatar image.",
            "Resume Files (CV): All uploaded PDF/DOCX documents and parsed candidate data.",
            "Career Profile: Listed skills, educational records, work history, and target job preferences.",
            "Application History: Submitted job applications and bookmarked positions.",
            "AI Interaction Logs: Chat histories with the AI Mentor and personalized learning roadmaps.",
            "Notification Identifiers: Push notification tokens (FCM Tokens) and device mapping records.",
          ],
        },
        {
          h: "Retention Period & Execution Timeline",
          p: [
            "Account deletion initiated directly in-app takes effect immediately. Email requests are verified and completed within 7 business days.",
            "Certain anonymized technical logs may be retained for up to 30 days strictly for security audit purposes and fraud prevention as required by law, after which they are irreversibly overwritten.",
          ],
        },
      ],
    },
  },

  support: {
    ar: {
      title: "الدعم والمساعدة",
      sections: [
        {
          h: "فريق دعم MatchIn في خدمتك",
          p: [
            `نحن هنا لمساعدتك في الحصول على أفضل تجربة على منصة ${C.appName}. سواء كان لديك استفسار حول استخدام ميزات التطبيق، مشاكل في رفع السيرة الذاتية، أو أسئلة حول سياسة الخصوصية.`,
          ],
          ul: [
            `البريد الإلكتروني للدعم الفني: ${C.email}`,
            `الموقع الرسمي: ${C.website}`,
            "قنوات التواصل الاجتماعي الرسمية: LinkedIn (@matchin-app) | X (@MatchInApp) | Instagram (@matchin.app)",
          ],
        },
        {
          h: "نصائح لتسريع الرد على استفسارك",
          p: ["عند مراسلة الدعم الفني، يُرجى تزويدنا بالتفاصيل التالية:"],
          ul: [
            "عنوان البريد الإلكتروني المسجل به داخل التطبيق.",
            "نوع هاتفك وإصدار نظام التشغيل (Android أو iOS).",
            "وصف مفصل للمشكلة مع إرفاق لقطة شاشة أو مقطع فيديو توضيحي إن أمكن.",
          ],
        },
      ],
    },
    en: {
      title: "Support & Contact",
      sections: [
        {
          h: "MatchIn Support Team",
          p: [
            `We are here to support your career journey on ${C.appNameEn}. Whether you need technical assistance, help with CV uploads, or clarification on our privacy practices, our team is ready to assist.`,
          ],
          ul: [
            `Support Email: ${C.email}`,
            `Official Website: ${C.website}`,
            "Official Social Channels: LinkedIn (@matchin-app) | X (@MatchInApp) | Instagram (@matchin.app)",
          ],
        },
        {
          h: "Tips for Faster Assistance",
          p: ["When contacting our support desk, please include:"],
          ul: [
            "Your registered account email address.",
            "Your device model and operating system version (Android / iOS).",
            "A clear description of the issue along with screenshots if available.",
          ],
        },
      ],
    },
  },
};

export const TLDR = {
  privacy: {
    ar: [
      "بياناتك الشخصية والمهنية مشفرة ومحمية ولا نقوم ببيعها أو تأجيرها لأي طرف ثالث نهائياً.",
      "مشاركة السيرة الذاتية تتم فقط مع أصحاب العمل عند تقديمك المباشر والاختياري على الوظائف.",
      "لك كامل الحق في طلب نسخة من بياناتك أو حذف حسابك وبياناتك نهائياً في أي وقت.",
    ],
    en: [
      "Your personal and career data is strictly encrypted and protected. We never sell your data.",
      "Resumes and profiles are shared with recruiters only upon your voluntary direct application.",
      "You retain full rights to request an export or permanent erasure of your data at any time.",
    ],
  },
  terms: {
    ar: [
      "أنت مسؤول عن صحة ودقة بيانات السيرة الذاتية والمؤهلات المسجلة في حسابك.",
      "توصيات الذكاء الاصطناعي للمطابقة ومسارات التعلم أدوات توجيهية ولا تشكل عقود توظيف ملزمة.",
      "يُحظر انتحال الشخصيات أو استخدام برمجيات الاستخراج التلقائي للبيانات.",
    ],
    en: [
      "You are responsible for maintaining accurate qualifications in your profile and uploaded CV.",
      "AI matching percentages and roadmap recommendations serve as advisory guidance.",
      "Automated scraping, duplicate spam applications, and fraudulent activity are prohibited.",
    ],
  },
  delete: {
    ar: [
      "الحذف الفوري متاح مباشرة من داخل التطبيق: الإعدادات ← الحساب ← حذف الحساب.",
      "يمكنك أيضاً طلب الحذف عبر مراسلة البريد الرسمي مع التحقق والتنفيذ خلال 7 أيام عمل.",
      "يتم مسح كافة ملفات السيرة الذاتية والبيانات ومحادثات الذكاء الاصطناعي نهائياً من الخوادم.",
    ],
    en: [
      "Immediate deletion is accessible directly inside the app: Settings → Account → Delete Account.",
      "Requests via email are verified and completed within 7 business days.",
      "All CVs, profile details, and AI conversation histories are permanently purged.",
    ],
  },
  support: {
    ar: [
      "فريق الدعم الفني والقانوني متاح للإجابة على كافة الاستفسارات.",
      `البريد الرسمي للتواصل واستقبال الطلبات: ${C.email}`,
      "للحصول على استجابة سريعة، يرجى تزويدنا بالبريد المسجل وطراز الجهاز ووصف المشكلة.",
    ],
    en: [
      "Our support and compliance desk is available to assist with any questions.",
      `Official contact channel: ${C.email}`,
      "For prompt assistance, please provide your registered email and device model.",
    ],
  },
};

