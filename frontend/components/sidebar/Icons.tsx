import {
    AlertTriangle,
    ArrowRight,
    Check,
    ChevronLeft,
    ChevronRight,
    CircuitBoardIcon,
    Command,
    CreditCard,
    File,
    FileSpreadsheet,
    FileText,
    LayoutList,
    HelpCircle,
    Image,
    Laptop,
    LayoutDashboardIcon,
    Loader2,
    LogIn,
    LucideIcon,
    Moon,
    MoreVertical,
    Pizza,
    Plus,
    Settings,
    SunMedium,
    Trash,
    Twitter,
    User,
    User2Icon,
    UserX2Icon,
    Warehouse,
    X,
    Trees,
    Box,
} from "lucide-react";

export type Icon = LucideIcon;

export const Icons: { [key: string]: LucideIcon } = {
    dashboard: LayoutDashboardIcon,
    logo: Command,
    login: LogIn,
    close: X,
    profile: User2Icon,
    spinner: Loader2,
    kanban: CircuitBoardIcon,
    chevronLeft: ChevronLeft,
    chevronRight: ChevronRight,
    trash: Trash,
    employee: UserX2Icon,
    post: FileText,
    page: File,
    media: Image,
    settings: Settings,
    billing: CreditCard,
    ellipsis: MoreVertical,
    add: Plus,
    warning: AlertTriangle,
    user: User,
    arrowRight: ArrowRight,
    help: HelpCircle,
    pizza: Pizza,
    sun: SunMedium,
    moon: Moon,
    laptop: Laptop,
    categories: FileSpreadsheet,
    container: Box,
    space: Warehouse,
    twitter: Twitter,
    map: Trees,
    check: Check,
    item: LayoutList,
};