from reportlab.lib import colors
from reportlab.lib.enums import TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle

OUTPUT = "public/Vikash-Sinha-Resume.pdf"
BLUE = colors.HexColor("#1f39e8")
CORAL = colors.HexColor("#ff5420")
INK = colors.HexColor("#0d0f18")
MUTED = colors.HexColor("#5b5b61")

styles = getSampleStyleSheet()
pdfmetrics.registerFont(TTFont("DejaVu", "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"))
pdfmetrics.registerFont(TTFont("DejaVu-Bold", "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"))
styles.add(ParagraphStyle(name="Name", parent=styles["Normal"], fontName="DejaVu-Bold", fontSize=28, leading=30, textColor=INK, spaceAfter=4))
styles.add(ParagraphStyle(name="Role", parent=styles["Normal"], fontName="DejaVu-Bold", fontSize=10, leading=14, textColor=BLUE, spaceAfter=10, uppercase=True))
styles.add(ParagraphStyle(name="Body", parent=styles["Normal"], fontName="DejaVu", fontSize=9.4, leading=14, textColor=INK, spaceAfter=7))
styles.add(ParagraphStyle(name="Small", parent=styles["Normal"], fontName="DejaVu", fontSize=8.5, leading=12, textColor=MUTED))
styles.add(ParagraphStyle(name="Section", parent=styles["Normal"], fontName="DejaVu-Bold", fontSize=9, leading=12, textColor=CORAL, spaceBefore=13, spaceAfter=6, uppercase=True))
styles.add(ParagraphStyle(name="Company", parent=styles["Normal"], fontName="DejaVu-Bold", fontSize=11, leading=14, textColor=INK))
styles.add(ParagraphStyle(name="RoleTitle", parent=styles["Normal"], fontName="DejaVu-Bold", fontSize=8.8, leading=12, textColor=BLUE))
styles.add(ParagraphStyle(name="Right", parent=styles["Small"], alignment=TA_RIGHT))

def p(text, style="Body"):
    return Paragraph(text, styles[style])

story = [
    p("VIKASH SINHA", "Name"),
    p("B2B MARKETING LEADER | GROWTH, BRAND & REVENUE", "Role"),
    Table([[p("Delhi NCR | Vekaashsenha@gmail.com", "Small"), p("linkedin.com/in/vikash-senha<br/>github.com/vekaashsenha", "Right")]], colWidths=[104 * mm, 66 * mm], style=[("VALIGN", (0, 0), (-1, -1), "TOP")]),
    Spacer(1, 7),
    p("EXECUTIVE PROFILE", "Section"),
    p("B2B marketing leader with 12+ years of experience across SaaS, professional services, travel, learning, staffing and technology-led businesses. Builds positioning, demand generation, buyer journeys, paid media, CRM and sales alignment into one commercial system. Delivered ₹100 Cr+ career revenue impact; ₹24 Cr in the last 12 months."),
    p("CAREER IMPACT", "Section"),
    Table([[p("₹100 Cr+<br/><font size=8>Career revenue impact across 12+ years</font>", "Company"), p("₹24 Cr<br/><font size=8>Revenue impact in the last 12 months</font>", "Company"), p("12×<br/><font size=8>Pipeline growth</font>", "Company"), p("5.6×<br/><font size=8>Marketing return</font>", "Company")]], colWidths=[42.5 * mm] * 4, style=[("BACKGROUND", (0,0), (-1,-1), colors.HexColor("#fff7df")), ("BOX", (0,0), (-1,-1), .4, colors.HexColor("#d9d2bc")), ("INNERGRID", (0,0), (-1,-1), .4, colors.HexColor("#d9d2bc")), ("LEFTPADDING", (0,0), (-1,-1), 8), ("RIGHTPADDING", (0,0), (-1,-1), 8), ("TOPPADDING", (0,0), (-1,-1), 11), ("BOTTOMPADDING", (0,0), (-1,-1), 11)]),
    p("PROFESSIONAL EXPERIENCE", "Section"),
]

experience = [
    ("International Travel House", "Marketing Manager | Travel, mobility and integrated business travel", "Leading brand, demand, content and commercial marketing across multiple travel businesses. Recent work contributed ₹24 Cr in revenue impact."),
    ("NCheng LLP", "Assistant Manager, Marketing | US professional services", "Built B2B demand programmes across LinkedIn and Google, improving pipeline performance and marketing return."),
    ("BYLD Group", "Marketing leadership | Learning and leadership solutions", "Built the marketing engine and a 17-person team from the ground up, aligning campaigns with measurable revenue outcomes."),
    ("Earlier growth roles", "SaaS, staffing, healthcare, EV and professional services", "Built acquisition systems across varied B2B buying environments while maintaining commercial discipline."),
]
for company, title, detail in experience:
    story.extend([p(company, "Company"), p(title, "RoleTitle"), p(detail), Spacer(1, 2)])

story.extend([
    p("CORE CAPABILITIES", "Section"),
    p("Go-to-market strategy | B2B demand generation and ABM | Google, LinkedIn and Meta advertising | CRM and funnel design | Sales alignment | Brand, content, events and integrated campaigns | Team building and marketing operations"),
    p("EDUCATION & DEVELOPMENT", "Section"),
    p("MBA, Marketing | Product Management Programme, XLRI Delhi | Advanced General Management Programme, IIM Ahmedabad"),
])

doc = SimpleDocTemplate(OUTPUT, pagesize=A4, rightMargin=20*mm, leftMargin=20*mm, topMargin=16*mm, bottomMargin=16*mm)
doc.build(story)
