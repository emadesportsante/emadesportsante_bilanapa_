import React, { useState, useRef, useEffect } from "react";
import { Activity, Timer, ShieldCheck, ShieldAlert, ShieldX, Play, Square, ChevronRight, Phone, Mail, MapPin, Video, Home, Stethoscope, CheckCircle2, ArrowLeft } from "lucide-react";
import { Analytics } from '@vercel/analytics/react';

const NAVY = "#003952";
const BLUE = "#0C7FB4";
const GREEN = "#27A543";
const BG = "#F6F8F9";

const LOGO_ICON = "data:image/png;base64,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";

const STEPS = [
  "intro",
  "q1", "q2", "q3", "q4", "q5", "q6", "q7",
  "tug-intro", "tug-run", "tug-done",
  "uni-intro", "uni-run", "uni-done",
  "result",
  "zone",
  "offer",
  "lead",
  "thanks",
];

function ProgressDots({ step }) {
  // only show progress across the "meaningful" phases
  const phase = step.startsWith("q") ? 1
    : step.startsWith("tug") ? 2
    : step.startsWith("uni") ? 3
    : ["result", "zone", "offer"].includes(step) ? 4
    : 0;
  if (phase === 0) return null;
  const labels = ["Questions", "Test 1", "Test 2", "Résultat"];
  return (
    <div style={{ display: "flex", gap: 8, marginBottom: 28, alignItems: "center" }}>
      {labels.map((l, i) => (
        <React.Fragment key={l}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: i + 1 <= phase ? BLUE : "#D8E2E6",
                transition: "background 0.3s",
              }}
            />
          </div>
          {i < labels.length - 1 && (
            <div style={{ flex: 1, height: 2, background: i + 1 < phase ? BLUE : "#D8E2E6" }} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

function Card({ children }) {
  return (
    <div
      style={{
        background: "white",
        borderRadius: 20,
        padding: "32px 28px",
        boxShadow: "0 2px 24px rgba(0,57,82,0.08)",
        maxWidth: 460,
        width: "100%",
      }}
    >
      {children}
    </div>
  );
}

function BigButton({ children, onClick, variant = "primary", icon, disabled }) {
  const styles = {
    primary: { background: BLUE, color: "white", border: "none" },
    dark: { background: NAVY, color: "white", border: "none" },
    outline: { background: "white", color: NAVY, border: `2px solid ${NAVY}` },
    green: { background: GREEN, color: "white", border: "none" },
  };
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        ...styles[variant],
        width: "100%",
        padding: "16px 20px",
        borderRadius: 14,
        fontSize: 17,
        fontWeight: 600,
        fontFamily: "inherit",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        transition: "transform 0.15s, box-shadow 0.15s",
        boxShadow: variant === "primary" || variant === "green" ? "0 4px 14px rgba(12,127,180,0.25)" : "none",
      }}
      onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.98)")}
      onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      {icon}
      {children}
    </button>
  );
}

function PrivacyModal({ onClose }) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,57,82,0.55)",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        zIndex: 100,
        padding: "0 0",
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "white",
          borderRadius: "20px 20px 0 0",
          padding: "28px 24px 32px",
          maxWidth: 480,
          width: "100%",
          maxHeight: "80vh",
          overflowY: "auto",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: 19, color: NAVY, margin: 0 }}>
            Confidentialité de vos données
          </h2>
          <button
            onClick={onClose}
            style={{ background: "#F1F5F6", border: "none", borderRadius: 8, width: 30, height: 30, fontSize: 16, color: NAVY, cursor: "pointer" }}
          >
            ✕
          </button>
        </div>
        <div style={{ fontSize: 13.5, color: "#405C68", lineHeight: 1.65 }}>
          <p><strong>Responsable du traitement</strong><br />EMADE Sport Santé (micro-entreprise, Mornant, Rhône) — contact : emade.sportsante@gmail.com</p>
          <p><strong>Pourquoi ces données sont collectées</strong><br />Pour évaluer votre risque de chute à partir de vos réponses et des deux tests d'équilibre, et vous proposer, si vous le souhaitez, un accompagnement adapté (à domicile ou en visio).</p>
          <p><strong>Base légale</strong><br />Votre consentement explicite, donné en cochant la case avant l'envoi.</p>
          <p><strong>Données concernées</strong><br />Identité, coordonnées, réponses au questionnaire (dont des informations de santé déclarées par vous), résultats des tests d'équilibre.</p>
          <p><strong>Qui y a accès</strong><br />EMADE Sport Santé uniquement. Aucune donnée n'est vendue ni transmise à un tiers.</p>
          <p><strong>Durée de conservation</strong><br />3 mois si vous ne donnez pas suite à notre prise de contact, ou pour la durée de votre suivi si vous devenez client.</p>
          <p><strong>Vos droits</strong><br />Vous pouvez à tout moment demander l'accès, la rectification ou la suppression de vos données en écrivant à emade.sportsante@gmail.com.</p>
          <p style={{ marginBottom: 0 }}><strong>À noter</strong><br />Cet outil est une auto-évaluation et ne constitue pas un dispositif médical ni un diagnostic.</p>
        </div>
      </div>
    </div>
  );
}

function YesNoQuestion({ title, subtitle, onAnswer, current }) {
  return (
    <div>
      <h2 style={{ fontFamily: "Georgia, serif", fontSize: 22, color: NAVY, margin: "0 0 10px", lineHeight: 1.3 }}>
        {title}
      </h2>
      {subtitle && <p style={{ color: "#5C7A87", fontSize: 15, marginBottom: 24, lineHeight: 1.5 }}>{subtitle}</p>}
      <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 24 }}>
        <BigButton variant={current === true ? "dark" : "outline"} onClick={() => onAnswer(true)}>
          Oui
        </BigButton>
        <BigButton variant={current === false ? "dark" : "outline"} onClick={() => onAnswer(false)}>
          Non
        </BigButton>
      </div>
    </div>
  );
}

function MultiSelectQuestion({ title, subtitle, options, current, onToggle, onValidate }) {
  return (
    <div>
      <h2 style={{ fontFamily: "Georgia, serif", fontSize: 21, color: NAVY, margin: "0 0 10px", lineHeight: 1.3 }}>
        {title}
      </h2>
      {subtitle && <p style={{ color: "#5C7A87", fontSize: 14.5, marginBottom: 20, lineHeight: 1.5 }}>{subtitle}</p>}
      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
        {options.map((opt) => {
          const checked = current.includes(opt.key);
          return (
            <button
              key={opt.key}
              onClick={() => onToggle(opt.key)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                textAlign: "left",
                padding: "13px 14px",
                borderRadius: 12,
                border: `2px solid ${checked ? BLUE : "#DCE5E8"}`,
                background: checked ? `${BLUE}10` : "white",
                cursor: "pointer",
                fontFamily: "inherit",
              }}
            >
              <div
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 6,
                  border: `2px solid ${checked ? BLUE : "#C3D2D8"}`,
                  background: checked ? BLUE : "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {checked && <CheckCircle2 size={14} color="white" />}
              </div>
              <span style={{ fontSize: 14.5, color: NAVY, lineHeight: 1.4 }}>{opt.label}</span>
            </button>
          );
        })}
      </div>
      <BigButton onClick={onValidate}>
        {current.length === 0 ? "Aucun de ces éléments" : "Valider"}
      </BigButton>
    </div>
  );
}

function ThanksScreen({ lead, recapText, adminEmail, recommendation }) {
  const [copied, setCopied] = useState(false);
  const typeLabel = { domicile: "Domicile", visio: "Visio", orientation: "Orientation" }[recommendation?.type] || "Non défini";
  const mailtoUrl = `mailto:${adminEmail}?subject=${encodeURIComponent(`Nouveau prospect - Bilan de chute (${typeLabel})`)}&body=${encodeURIComponent(recapText)}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(recapText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div>
      <div style={{ textAlign: "center", marginBottom: 16 }}>
        <CheckCircle2 size={40} color={GREEN} style={{ marginBottom: 12 }} />
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: 20, color: NAVY, marginBottom: 8 }}>
          Merci {lead.nom.split(" ")[0] || ""}
        </h2>
        <p style={{ color: "#5C7A87", fontSize: 14, lineHeight: 1.5 }}>
          Pour finaliser votre demande, envoyez ce récapitulatif à EMADE Sport Santé — par le bouton ci-dessous ou en le copiant dans un email ou SMS.
        </p>
      </div>

      <div
        style={{
          background: BG,
          borderRadius: 12,
          padding: "14px 16px",
          fontSize: 12.5,
          color: "#405C68",
          whiteSpace: "pre-wrap",
          lineHeight: 1.6,
          marginBottom: 16,
          maxHeight: 220,
          overflowY: "auto",
          fontFamily: "monospace",
        }}
      >
        {recapText}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <BigButton variant="green" icon={<CheckCircle2 size={18} />} onClick={handleCopy}>
          {copied ? "Récapitulatif copié !" : "Copier le récapitulatif"}
        </BigButton>
        <a
          href={mailtoUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            padding: "16px 20px",
            borderRadius: 14,
            border: `2px solid ${NAVY}`,
            color: NAVY,
            textDecoration: "none",
            fontSize: 17,
            fontWeight: 600,
          }}
        >
          <Mail size={18} /> Ouvrir mon application email
        </a>
      </div>

      <p style={{ color: "#8A9FA8", fontSize: 12.5, marginTop: 16, textAlign: "center" }}>
        Destinataire : {adminEmail}
      </p>
    </div>
  );
}

function Stopwatch({ onFinish, colorAccent }) {
  const [running, setRunning] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const startRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    if (running) {
      const tick = () => {
        setElapsed((Date.now() - startRef.current) / 1000);
        rafRef.current = requestAnimationFrame(tick);
      };
      startRef.current = Date.now() - elapsed * 1000;
      rafRef.current = requestAnimationFrame(tick);
    }
    return () => cancelAnimationFrame(rafRef.current);
    // eslint-disable-next-line
  }, [running]);

  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          fontFamily: "Georgia, serif",
          fontSize: 56,
          fontWeight: 700,
          color: colorAccent,
          margin: "20px 0",
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {elapsed.toFixed(1)}s
      </div>
      <div style={{ display: "flex", gap: 12 }}>
        {!running ? (
          <BigButton icon={<Play size={18} />} variant="green" onClick={() => setRunning(true)}>
            {elapsed > 0 ? "Reprendre" : "Démarrer"}
          </BigButton>
        ) : (
          <BigButton icon={<Square size={18} />} variant="dark" onClick={() => setRunning(false)}>
            Arrêter
          </BigButton>
        )}
      </div>
      {!running && elapsed > 0 && (
        <div style={{ marginTop: 16, display: "flex", gap: 12 }}>
          <button
            onClick={() => setElapsed(0)}
            style={{ background: "none", border: "none", color: "#5C7A87", fontSize: 14, cursor: "pointer", textDecoration: "underline" }}
          >
            Recommencer
          </button>
          <button
            onClick={() => onFinish(elapsed)}
            style={{ background: "none", border: "none", color: BLUE, fontSize: 14, cursor: "pointer", fontWeight: 600 }}
          >
            Valider ce temps →
          </button>
        </div>
      )}
    </div>
  );
}

export default function App() {
  const [step, setStep] = useState("intro");
  const [answers, setAnswers] = useState({});
  const [tugTime, setTugTime] = useState(null);
  const [uniTime, setUniTime] = useState(null);
  const [lead, setLead] = useState({ nom: "", telephone: "", email: "", commune: "" });
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState(null);
  const [zoneRhone, setZoneRhone] = useState(null);
  const [consent, setConsent] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  const questions = [
    { key: "chute", type: "yesno", title: "Avez-vous chuté au cours des 12 derniers mois ?", subtitle: "Même une chute sans blessure compte." },
    { key: "medicaments", type: "yesno", title: "Prenez-vous plus de 4 médicaments différents par jour ?", subtitle: "Ou des somnifères, anxiolytiques, médicaments pour la tension." },
    { key: "vision", type: "yesno", title: "Avez-vous des difficultés de vision non corrigées récemment ?", subtitle: "Dernier contrôle ophtalmologique de plus de 2 ans." },
    { key: "activite", type: "yesno", title: "Faites-vous moins de 30 minutes de marche ou d'activité par jour ?", subtitle: "" },
    { key: "aide_marche", type: "yesno", title: "Utilisez-vous une canne, un déambulateur ou un appui pour vous déplacer ?", subtitle: "" },
    { key: "peur", type: "yesno", title: "Évitez-vous certaines activités par peur de tomber ?", subtitle: "Par exemple : sortir seul, prendre une douche debout, marcher sur terrain irrégulier." },
    { key: "douleur", type: "yesno", title: "Ressentez-vous des douleurs aux hanches, genoux ou chevilles qui gênent votre marche ?", subtitle: "" },
  ];

  const score = (() => {
    let s = 0;
    if (answers.chute) s += 3;
    if (answers.medicaments) s += 1;
    if (answers.vision) s += 1;
    if (answers.activite) s += 1;
    if (answers.aide_marche) s += 2;
    if (answers.peur) s += 1;
    if (answers.douleur) s += 1;
    if (tugTime !== null) {
      if (tugTime >= 12) s += 3;
      else if (tugTime >= 10) s += 1;
    }
    if (uniTime !== null) {
      if (uniTime < 5) s += 3;
      else if (uniTime < 10) s += 1;
    }
    return s;
  })();

  const riskLevel = score >= 9 ? "eleve" : score >= 4 ? "modere" : "faible";

  const riskConfig = {
    faible: {
      label: "Risque faible",
      color: GREEN,
      icon: <ShieldCheck size={40} color={GREEN} />,
      msg: "Vos résultats ne montrent pas de signal d'alerte particulier aujourd'hui. Continuer une activité physique régulière est la meilleure prévention.",
    },
    modere: {
      label: "Risque modéré",
      color: "#E0932C",
      icon: <ShieldAlert size={40} color="#E0932C" />,
      msg: "Certains éléments méritent votre attention. Un bilan avec un professionnel de l'activité physique adaptée peut vous aider à sécuriser votre équilibre à domicile.",
    },
    eleve: {
      label: "Risque élevé",
      color: "#C7402C",
      icon: <ShieldX size={40} color="#C7402C" />,
      msg: "Plusieurs signaux sont présents. Nous vous recommandons d'en parler à votre médecin et de vous faire accompagner par un professionnel qualifié.",
    },
  };

  // Logique de recommandation : accompagnement "spécifique" (modéré/élevé) vs "léger" (faible)
  // + zone géographique (Rhône = domicile possible, hors zone = visio ou orientation)
  const getRecommendation = () => {
    if (riskLevel === "faible") {
      return {
        type: "visio",
        icon: <Video size={32} color={BLUE} />,
        title: "Un accompagnement léger vous suffit",
        text: "Vos résultats sont rassurants. Un suivi léger en visio, pour entretenir votre équilibre et votre force, est adapté à votre profil — où que vous habitiez en France.",
        cta: "Découvrir le programme visio",
      };
    }
    // risque modéré ou élevé = besoin d'un accompagnement plus spécifique
    if (zoneRhone) {
      return {
        type: "domicile",
        icon: <Home size={32} color={GREEN} />,
        title: "Un accompagnement à domicile est recommandé",
        text: "Vous êtes dans le secteur des Monts du Lyonnais / Coteaux Rhodaniens. Un accompagnement en présentiel, à votre domicile, est le plus adapté à vos résultats — je peux intervenir directement.",
        cta: "Prendre contact pour un bilan à domicile",
      };
    }
    if (riskLevel === "eleve") {
      return {
        type: "orientation",
        icon: <Stethoscope size={32} color="#C7402C" />,
        title: "Un accompagnement supervisé en présentiel est nécessaire",
        text: "Vos résultats indiquent un risque élevé. Hors de mon secteur d'intervention, un accompagnement à distance seul n'est pas suffisamment sécurisant. Je vous recommande de consulter votre médecin et un professionnel APA ou kiné près de chez vous. Je peux aussi vous envoyer des conseils de prévention.",
        cta: "Recevoir des conseils et une orientation",
      };
    }
    return {
      type: "visio",
      icon: <Video size={32} color={BLUE} />,
      title: "Un accompagnement en visio est adapté",
      text: "Vous êtes hors de mon secteur de déplacement à domicile. Un accompagnement individuel en visio, avec un suivi régulier, est adapté à vos résultats.",
      cta: "Découvrir le programme visio",
    };
  };
  const recommendation = zoneRhone !== null ? getRecommendation() : null;

  const goNext = () => {
    const idx = STEPS.indexOf(step);
    setStep(STEPS[idx + 1]);
  };
  const goBack = () => {
    const idx = STEPS.indexOf(step);
    if (idx > 0) setStep(STEPS[idx - 1]);
  };

  const questionIndex = ["q1", "q2", "q3", "q4", "q5", "q6", "q7"].indexOf(step);

  const buildRecapText = () => {
    const typeLabel = { domicile: "Domicile", visio: "Visio", orientation: "Orientation (hors zone, risque élevé)" }[recommendation?.type] || "Non défini";
    return [
      `Nom : ${lead.nom}`,
      `Téléphone : ${lead.telephone}`,
      `Email : ${lead.email || "non renseigné"}`,
      `Commune : ${lead.commune || "non renseignée"}`,
      `Consentement RGPD : Oui (${new Date().toLocaleString("fr-FR")})`,
      "",
      `Recommandation : ${typeLabel}`,
      `Secteur Rhône : ${zoneRhone ? "Oui" : "Non"}`,
      `Niveau de risque : ${riskLevel} (score ${score})`,
      `Test lève-toi-et-marche : ${tugTime !== null ? tugTime.toFixed(1) + "s" : "non réalisé"}`,
      `Test appui unipodal : ${uniTime !== null ? uniTime.toFixed(1) + "s" : "non réalisé"}`,
      "",
      "Réponses au questionnaire :",
      `- Chute dans les 12 derniers mois : ${answers.chute ? "Oui" : "Non"}`,
      `- Plus de 4 médicaments/jour : ${answers.medicaments ? "Oui" : "Non"}`,
      `- Difficultés de vision : ${answers.vision ? "Oui" : "Non"}`,
      `- Moins de 30 min d'activité/jour : ${answers.activite ? "Oui" : "Non"}`,
      `- Aide à la marche : ${answers.aide_marche ? "Oui" : "Non"}`,
      `- Peur de tomber : ${answers.peur ? "Oui" : "Non"}`,
      `- Douleurs articulaires : ${answers.douleur ? "Oui" : "Non"}`,
    ].join("\n");
  };

  const ADMIN_EMAIL = "emade.sportsante@gmail.com";

  const submitLead = async () => {
    setSaving(true);
    setSaveError(null);

    const entry = {
      ...lead,
      consent: true,
      consentDate: new Date().toISOString(),
      score,
      riskLevel,
      zoneRhone,
      recommandation: recommendation?.type || null,
      answers,
      tugTime,
      uniTime,
      date: new Date().toISOString(),
    };

    // Tentative de sauvegarde silencieuse (best-effort), non bloquante.
    try {
      if (window.storage && typeof window.storage.set === "function") {
        await window.storage.set(`leads:${Date.now()}`, JSON.stringify(entry), true);
      }
    } catch (e) {
      console.warn("Stockage indisponible:", e);
    }

    setSaving(false);
    setStep("thanks");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG,
        display: "flex",
        justifyContent: "center",
        padding: "32px 16px",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
      }}
    >
      <div style={{ width: "100%", maxWidth: 460 }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
          {step !== "intro" && step !== "thanks" && (
            <button
              onClick={goBack}
              style={{ background: "white", border: "none", borderRadius: 10, width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", boxShadow: "0 1px 6px rgba(0,57,82,0.1)" }}
            >
              <ArrowLeft size={18} color={NAVY} />
            </button>
          )}
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <img src={LOGO_ICON} alt="EMADE Sport Santé" style={{ width: 34, height: 34, objectFit: "contain" }} />
            <span style={{ fontWeight: 700, color: NAVY, fontSize: 15, letterSpacing: 0.3 }}>EMADE SPORT SANTÉ</span>
          </div>
        </div>

        <ProgressDots step={step} />

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Card>
            {step === "intro" && (
              <div>
                <img src={LOGO_ICON} alt="EMADE Sport Santé" style={{ width: 64, height: 64, objectFit: "contain", marginBottom: 20 }} />
                <h1 style={{ fontFamily: "Georgia, serif", fontSize: 26, color: NAVY, margin: "0 0 12px", lineHeight: 1.25 }}>
                  Bilan de risque de chute
                </h1>
                <p style={{ color: "#5C7A87", fontSize: 15.5, lineHeight: 1.6, marginBottom: 8 }}>
                  Un test gratuit en 5 minutes : 5 questions et 2 petits exercices d'équilibre à réaliser chez vous, en sécurité.
                </p>
                <p style={{ color: "#5C7A87", fontSize: 15.5, lineHeight: 1.6, marginBottom: 28 }}>
                  À faire seul ou avec un proche à proximité. Tenez-vous près d'un mur ou d'une chaise pendant les exercices.
                </p>
                <BigButton onClick={goNext} icon={<ChevronRight size={18} />}>
                  Commencer le test
                </BigButton>
                <button
                  type="button"
                  onClick={() => setShowPrivacy(true)}
                  style={{ display: "block", margin: "14px auto 0", background: "none", border: "none", color: "#8A9FA8", fontSize: 12.5, textDecoration: "underline", cursor: "pointer" }}
                >
                  Confidentialité des données
                </button>
              </div>
            )}

            {questionIndex >= 0 && questions[questionIndex].type === "yesno" && (
              <YesNoQuestion
                title={questions[questionIndex].title}
                subtitle={questions[questionIndex].subtitle}
                current={answers[questions[questionIndex].key]}
                onAnswer={(val) => {
                  setAnswers({ ...answers, [questions[questionIndex].key]: val });
                  setTimeout(goNext, 200);
                }}
              />
            )}

            {questionIndex >= 0 && questions[questionIndex].type === "multiselect" && (
              <MultiSelectQuestion
                title={questions[questionIndex].title}
                subtitle={questions[questionIndex].subtitle}
                options={questions[questionIndex].options}
                current={answers.domicileItems || []}
                onToggle={(key) => {
                  const items = answers.domicileItems || [];
                  const next = items.includes(key) ? items.filter((k) => k !== key) : [...items, key];
                  setAnswers({ ...answers, domicileItems: next });
                }}
                onValidate={goNext}
              />
            )}

            {step === "tug-intro" && (
              <div>
                <Timer size={32} color={BLUE} style={{ marginBottom: 16 }} />
                <h2 style={{ fontFamily: "Georgia, serif", fontSize: 22, color: NAVY, margin: "0 0 12px" }}>
                  Test 1 : lève-toi-et-marche
                </h2>
                <ol style={{ color: "#5C7A87", fontSize: 15, lineHeight: 1.8, paddingLeft: 20, marginBottom: 24 }}>
                  <li>Asseyez-vous sur une chaise avec accoudoirs</li>
                  <li>Au signal, levez-vous, marchez 3 mètres</li>
                  <li>Faites demi-tour et rasseyez-vous</li>
                </ol>
                <p style={{ color: "#5C7A87", fontSize: 14, marginBottom: 24, fontStyle: "italic" }}>
                  Un proche peut chronométrer, ou démarrez le chrono vous-même juste avant de vous lever.
                </p>
                <BigButton onClick={goNext}>J'ai compris, commencer</BigButton>
              </div>
            )}
            {step === "tug-run" && (
              <div>
                <h2 style={{ fontFamily: "Georgia, serif", fontSize: 20, color: NAVY, margin: "0 0 8px", textAlign: "center" }}>
                  Lève-toi-et-marche
                </h2>
                <p style={{ textAlign: "center", color: "#5C7A87", fontSize: 14, marginBottom: 8 }}>
                  Démarrez, faites l'exercice, arrêtez.
                </p>
                <Stopwatch
                  colorAccent={BLUE}
                  onFinish={(t) => {
                    setTugTime(t);
                    goNext();
                  }}
                />
              </div>
            )}
            {step === "tug-done" && (
              <div style={{ textAlign: "center" }}>
                <CheckCircle2 size={40} color={GREEN} style={{ marginBottom: 12 }} />
                <p style={{ color: "#5C7A87", fontSize: 15, marginBottom: 4 }}>Temps enregistré</p>
                <p style={{ fontFamily: "Georgia, serif", fontSize: 32, color: NAVY, marginBottom: 24 }}>{tugTime?.toFixed(1)}s</p>
                <BigButton onClick={goNext}>Passer au test suivant</BigButton>
              </div>
            )}

            {step === "uni-intro" && (
              <div>
                <Timer size={32} color={BLUE} style={{ marginBottom: 16 }} />
                <h2 style={{ fontFamily: "Georgia, serif", fontSize: 22, color: NAVY, margin: "0 0 12px" }}>
                  Test 2 : appui sur une jambe
                </h2>
                <ol style={{ color: "#5C7A87", fontSize: 15, lineHeight: 1.8, paddingLeft: 20, marginBottom: 24 }}>
                  <li>Tenez-vous près d'un mur ou d'une chaise</li>
                  <li>Levez un pied du sol, yeux ouverts</li>
                  <li>Chronométrez jusqu'à devoir reposer le pied</li>
                </ol>
                <p style={{ color: "#5C7A87", fontSize: 14, marginBottom: 24, fontStyle: "italic" }}>
                  Choisissez la jambe qui vous semble la plus stable.
                </p>
                <BigButton onClick={goNext}>J'ai compris, commencer</BigButton>
              </div>
            )}
            {step === "uni-run" && (
              <div>
                <h2 style={{ fontFamily: "Georgia, serif", fontSize: 20, color: NAVY, margin: "0 0 8px", textAlign: "center" }}>
                  Appui unipodal
                </h2>
                <p style={{ textAlign: "center", color: "#5C7A87", fontSize: 14, marginBottom: 8 }}>
                  Démarrez, levez le pied, arrêtez dès l'appui reposé.
                </p>
                <Stopwatch
                  colorAccent={BLUE}
                  onFinish={(t) => {
                    setUniTime(t);
                    goNext();
                  }}
                />
              </div>
            )}
            {step === "uni-done" && (
              <div style={{ textAlign: "center" }}>
                <CheckCircle2 size={40} color={GREEN} style={{ marginBottom: 12 }} />
                <p style={{ color: "#5C7A87", fontSize: 15, marginBottom: 4 }}>Temps enregistré</p>
                <p style={{ fontFamily: "Georgia, serif", fontSize: 32, color: NAVY, marginBottom: 24 }}>{uniTime?.toFixed(1)}s</p>
                <BigButton onClick={goNext}>Voir mon résultat</BigButton>
              </div>
            )}

            {step === "result" && (
              <div>
                <div style={{ textAlign: "center", marginBottom: 20 }}>
                  {riskConfig[riskLevel].icon}
                  <h2 style={{ fontFamily: "Georgia, serif", fontSize: 24, color: riskConfig[riskLevel].color, margin: "12px 0 0" }}>
                    {riskConfig[riskLevel].label}
                  </h2>
                </div>
                <p style={{ color: "#405C68", fontSize: 15.5, lineHeight: 1.6, marginBottom: 20, textAlign: "center" }}>
                  {riskConfig[riskLevel].msg}
                </p>
                <div style={{ background: BG, borderRadius: 12, padding: "14px 16px", marginBottom: 24, fontSize: 13.5, color: "#5C7A87" }}>
                  Ce test est un outil d'auto-évaluation et ne remplace pas un avis médical. En cas de doute, parlez-en à votre médecin.
                </div>
                <BigButton variant="green" icon={<ChevronRight size={18} />} onClick={goNext}>
                  Voir la suite recommandée
                </BigButton>
              </div>
            )}

            {step === "zone" && (
              <YesNoQuestion
                title="Résidez-vous dans le secteur Monts du Lyonnais / Coteaux Rhodaniens (Rhône) ?"
                subtitle="Cela nous permet de vous proposer l'accompagnement le plus adapté : à domicile ou en visio."
                current={zoneRhone}
                onAnswer={(val) => {
                  setZoneRhone(val);
                  setTimeout(goNext, 200);
                }}
              />
            )}

            {step === "offer" && recommendation && (
              <div>
                <div style={{ textAlign: "center", marginBottom: 16 }}>{recommendation.icon}</div>
                <h2 style={{ fontFamily: "Georgia, serif", fontSize: 21, color: NAVY, margin: "0 0 12px", textAlign: "center", lineHeight: 1.3 }}>
                  {recommendation.title}
                </h2>
                <p style={{ color: "#405C68", fontSize: 15, lineHeight: 1.6, marginBottom: 24, textAlign: "center" }}>
                  {recommendation.text}
                </p>
                <BigButton
                  variant={recommendation.type === "orientation" ? "outline" : "green"}
                  icon={<Phone size={18} />}
                  onClick={goNext}
                >
                  {recommendation.cta}
                </BigButton>
              </div>
            )}

            {step === "lead" && (
              <div>
                <h2 style={{ fontFamily: "Georgia, serif", fontSize: 22, color: NAVY, margin: "0 0 8px" }}>
                  Vos coordonnées
                </h2>
                <p style={{ color: "#5C7A87", fontSize: 14.5, marginBottom: 20 }}>
                  Un récapitulatif de votre bilan sera généré, à envoyer à EMADE Sport Santé en un clic.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  <input
                    placeholder="Nom et prénom"
                    value={lead.nom}
                    onChange={(e) => setLead({ ...lead, nom: e.target.value })}
                    style={inputStyle}
                  />
                  <input
                    placeholder="Téléphone"
                    value={lead.telephone}
                    onChange={(e) => setLead({ ...lead, telephone: e.target.value })}
                    style={inputStyle}
                  />
                  <input
                    placeholder="Email (optionnel)"
                    value={lead.email}
                    onChange={(e) => setLead({ ...lead, email: e.target.value })}
                    style={inputStyle}
                  />
                  <input
                    placeholder="Commune"
                    value={lead.commune}
                    onChange={(e) => setLead({ ...lead, commune: e.target.value })}
                    style={inputStyle}
                  />
                </div>
                <label
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 10,
                    marginTop: 18,
                    cursor: "pointer",
                  }}
                >
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    style={{ marginTop: 3, width: 18, height: 18, flexShrink: 0 }}
                  />
                  <span style={{ fontSize: 13, color: "#5C7A87", lineHeight: 1.5 }}>
                    J'accepte que ces informations, y compris les réponses de santé déclarées, soient utilisées par EMADE Sport Santé pour me recontacter.{" "}
                    <button
                      type="button"
                      onClick={() => setShowPrivacy(true)}
                      style={{ background: "none", border: "none", color: BLUE, fontSize: 13, textDecoration: "underline", cursor: "pointer", padding: 0 }}
                    >
                      En savoir plus
                    </button>
                  </span>
                </label>
                {saveError && (
                  <div style={{ marginTop: 12 }}>
                    <p style={{ color: "#C7402C", fontSize: 13, marginBottom: 8 }}>
                      Erreur : {saveError}
                    </p>
                    <button
                      onClick={submitLead}
                      style={{ background: "none", border: "none", color: BLUE, fontSize: 13.5, fontWeight: 600, cursor: "pointer", padding: 0 }}
                    >
                      Réessayer
                    </button>
                  </div>
                )}
                <div style={{ marginTop: 24 }}>
                  <BigButton
                    disabled={!lead.nom || !lead.telephone || !consent || saving}
                    onClick={submitLead}
                  >
                    {saving ? "Préparation..." : "Générer mon récapitulatif"}
                  </BigButton>
                </div>
              </div>
            )}

            {step === "thanks" && (
              <ThanksScreen lead={lead} recapText={buildRecapText()} adminEmail={ADMIN_EMAIL} recommendation={recommendation} />
            )}
          </Card>
        </div>
        {showPrivacy && <PrivacyModal onClose={() => setShowPrivacy(false)} />}
      </div>
      <Analytics />
    </div>
  );
}

const inputStyle = {
  padding: "13px 14px",
  borderRadius: 10,
  border: "1.5px solid #DCE5E8",
  fontSize: 15.5,
  fontFamily: "inherit",
  outline: "none",
};
