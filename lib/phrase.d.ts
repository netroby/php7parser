import { Token, TokenType } from './lexer';
export declare const enum PhraseType {
    Unknown = 0,
    AdditiveExpression = 1,
    AnonymousClassDeclaration = 2,
    AnonymousClassDeclarationHeader = 3,
    AnonymousFunctionCreationExpression = 4,
    AnonymousFunctionHeader = 5,
    AnonymousFunctionUseClause = 6,
    AnonymousFunctionUseVariable = 7,
    ArgumentExpressionList = 8,
    ArrayCreationExpression = 9,
    ArrayElement = 10,
    ArrayInitialiserList = 11,
    ArrayKey = 12,
    ArrayValue = 13,
    BitwiseExpression = 14,
    BreakStatement = 15,
    ByRefAssignmentExpression = 16,
    CaseStatement = 17,
    CaseStatementList = 18,
    CastExpression = 19,
    CatchClause = 20,
    CatchClauseList = 21,
    CatchNameList = 22,
    ClassBaseClause = 23,
    ClassConstantAccessExpression = 24,
    ClassConstDeclaration = 25,
    ClassConstElement = 26,
    ClassConstElementList = 27,
    ClassDeclaration = 28,
    ClassDeclarationBody = 29,
    ClassDeclarationHeader = 30,
    ClassInterfaceClause = 31,
    ClassMemberDeclarationList = 32,
    ClassModifiers = 33,
    ClassTypeDesignator = 34,
    CloneExpression = 35,
    ClosureUseList = 36,
    CoalesceExpression = 37,
    CompoundAssignmentExpression = 38,
    CompoundStatement = 39,
    TernaryExpression = 40,
    ConstantAccessExpression = 41,
    ConstDeclaration = 42,
    ConstElement = 43,
    ConstElementList = 44,
    ContinueStatement = 45,
    DeclareDirective = 46,
    DeclareStatement = 47,
    DefaultStatement = 48,
    DoStatement = 49,
    DoubleQuotedStringLiteral = 50,
    EchoIntrinsic = 51,
    ElseClause = 52,
    ElseIfClause = 53,
    ElseIfClauseList = 54,
    EmptyIntrinsic = 55,
    EncapsulatedExpression = 56,
    EncapsulatedVariable = 57,
    EncapsulatedVariableList = 58,
    EqualityExpression = 59,
    Error = 60,
    ErrorClassMemberDeclaration = 61,
    ErrorClassTypeDesignatorAtom = 62,
    ErrorControlExpression = 63,
    ErrorExpression = 64,
    ErrorScopedAccessExpression = 65,
    ErrorTraitAdaptation = 66,
    ErrorVariable = 67,
    ErrorVariableAtom = 68,
    EvalIntrinsic = 69,
    ExitIntrinsic = 70,
    ExponentiationExpression = 71,
    ExpressionList = 72,
    ExpressionStatement = 73,
    FinallyClause = 74,
    ForControl = 75,
    ForeachCollection = 76,
    ForeachKey = 77,
    ForeachStatement = 78,
    ForeachValue = 79,
    ForEndOfLoop = 80,
    ForExpressionGroup = 81,
    ForInitialiser = 82,
    ForStatement = 83,
    FullyQualifiedName = 84,
    FunctionCallExpression = 85,
    FunctionDeclaration = 86,
    FunctionDeclarationBody = 87,
    FunctionDeclarationHeader = 88,
    FunctionStaticDeclaration = 89,
    FunctionStaticInitialiser = 90,
    GlobalDeclaration = 91,
    GotoStatement = 92,
    HaltCompilerStatement = 93,
    HeredocStringLiteral = 94,
    Identifier = 95,
    IfStatement = 96,
    IncludeExpression = 97,
    IncludeOnceExpression = 98,
    InlineText = 99,
    InstanceOfExpression = 100,
    InstanceofTypeDesignator = 101,
    InterfaceBaseClause = 102,
    InterfaceDeclaration = 103,
    InterfaceDeclarationBody = 104,
    InterfaceDeclarationHeader = 105,
    InterfaceMemberDeclarationList = 106,
    IssetIntrinsic = 107,
    ListIntrinsic = 108,
    LogicalExpression = 109,
    MemberModifierList = 110,
    MemberName = 111,
    MethodCallExpression = 112,
    MethodDeclaration = 113,
    MethodDeclarationBody = 114,
    MethodDeclarationHeader = 115,
    MethodReference = 116,
    MultiplicativeExpression = 117,
    NamedLabelStatement = 118,
    NamespaceAliasingClause = 119,
    NamespaceDefinition = 120,
    NamespaceName = 121,
    NamespaceUseClause = 122,
    NamespaceUseClauseList = 123,
    NamespaceUseDeclaration = 124,
    NamespaceUseGroupClause = 125,
    NamespaceUseGroupClauseList = 126,
    NullStatement = 127,
    ObjectCreationExpression = 128,
    ParameterDeclaration = 129,
    ParameterDeclarationList = 130,
    PostfixDecrementExpression = 131,
    PostfixIncrementExpression = 132,
    PrefixDecrementExpression = 133,
    PrefixIncrementExpression = 134,
    PrintIntrinsic = 135,
    PropertyAccessExpression = 136,
    PropertyDeclaration = 137,
    PropertyElement = 138,
    PropertyElementList = 139,
    PropertyInitialiser = 140,
    QualifiedName = 141,
    QualifiedNameList = 142,
    RelationalExpression = 143,
    RelativeQualifiedName = 144,
    RelativeScope = 145,
    RequireExpression = 146,
    RequireOnceExpression = 147,
    ReturnStatement = 148,
    ReturnType = 149,
    ScopedCallExpression = 150,
    ScopedMemberName = 151,
    ScopedPropertyAccessExpression = 152,
    ShellCommandExpression = 153,
    ShiftExpression = 154,
    SimpleAssignmentExpression = 155,
    SimpleVariable = 156,
    StatementList = 157,
    StaticVariableDeclaration = 158,
    StaticVariableDeclarationList = 159,
    SubscriptExpression = 160,
    SwitchStatement = 161,
    ThrowStatement = 162,
    TraitAdaptationList = 163,
    TraitAlias = 164,
    TraitDeclaration = 165,
    TraitDeclarationBody = 166,
    TraitDeclarationHeader = 167,
    TraitMemberDeclarationList = 168,
    TraitPrecedence = 169,
    TraitUseClause = 170,
    TraitUseSpecification = 171,
    TryStatement = 172,
    TypeDeclaration = 173,
    UnaryOpExpression = 174,
    UnsetIntrinsic = 175,
    VariableList = 176,
    VariableNameList = 177,
    VariadicUnpacking = 178,
    WhileStatement = 179,
    YieldExpression = 180,
    YieldFromExpression = 181,
}
export interface Phrase {
    phraseType: PhraseType;
    children: (Phrase | Token)[];
}
export interface ParseError extends Phrase {
    unexpected: Token;
    expected?: TokenType;
}
export declare function phraseTypeToString(type: PhraseType): "" | "Unknown" | "AdditiveExpression" | "AnonymousClassDeclaration" | "AnonymousClassDeclarationHeader" | "AnonymousFunctionCreationExpression" | "AnonymousFunctionHeader" | "AnonymousFunctionUseClause" | "AnonymousFunctionUseVariable" | "ArgumentExpressionList" | "ArrayCreationExpression" | "ArrayElement" | "ArrayInitialiserList" | "ArrayKey" | "ArrayValue" | "BitwiseExpression" | "BreakStatement" | "ByRefAssignmentExpression" | "CaseStatement" | "CaseStatementList" | "CastExpression" | "CatchClause" | "CatchClauseList" | "CatchNameList" | "ClassBaseClause" | "ClassConstantAccessExpression" | "ClassConstDeclaration" | "ClassConstElement" | "ClassConstElementList" | "ClassDeclaration" | "ClassDeclarationBody" | "ClassDeclarationHeader" | "ClassInterfaceClause" | "ClassMemberDeclarationList" | "ClassModifiers" | "ClassTypeDesignator" | "CloneExpression" | "ClosureUseList" | "CoalesceExpression" | "CompoundAssignmentExpression" | "CompoundStatement" | "TernaryExpression" | "ConstantAccessExpression" | "ConstDeclaration" | "ConstElement" | "ConstElementList" | "ContinueStatement" | "DeclareDirective" | "DeclareStatement" | "DefaultStatement" | "DoStatement" | "DoubleQuotedStringLiteral" | "EchoIntrinsic" | "ElseClause" | "ElseIfClause" | "ElseIfClauseList" | "EmptyIntrinsic" | "EncapsulatedExpression" | "EncapsulatedVariable" | "EncapsulatedVariableList" | "EqualityExpression" | "ErrorClassMemberDeclaration" | "ErrorClassTypeDesignatorAtom" | "ErrorControlExpression" | "ErrorExpression" | "ErrorScopedAccessExpression" | "ErrorTraitAdaptation" | "ErrorVariable" | "ErrorVariableAtom" | "EvalIntrinsic" | "ExitIntrinsic" | "ExponentiationExpression" | "ExpressionList" | "ExpressionStatement" | "FinallyClause" | "ForControl" | "ForeachCollection" | "ForeachKey" | "ForeachStatement" | "ForeachValue" | "ForEndOfLoop" | "ForExpressionGroup" | "ForInitialiser" | "ForStatement" | "FullyQualifiedName" | "FunctionCallExpression" | "FunctionDeclaration" | "FunctionDeclarationHeader" | "FunctionStaticDeclaration" | "FunctionStaticInitialiser" | "GlobalDeclaration" | "GotoStatement" | "HaltCompilerStatement" | "HeredocStringLiteral" | "Identifier" | "IfStatement" | "IncludeExpression" | "IncludeOnceExpression" | "InlineText" | "InstanceOfExpression" | "InstanceofTypeDesignator" | "InterfaceBaseClause" | "InterfaceDeclaration" | "InterfaceDeclarationBody" | "InterfaceDeclarationHeader" | "InterfaceMemberDeclarationList" | "IssetIntrinsic" | "ListIntrinsic" | "LogicalExpression" | "MemberModifierList" | "MemberName" | "MethodCallExpression" | "MethodDeclaration" | "MethodDeclarationBody" | "MethodDeclarationHeader" | "MethodReference" | "MultiplicativeExpression" | "NamedLabelStatement" | "NamespaceAliasingClause" | "NamespaceDefinition" | "NamespaceName" | "NamespaceUseClause" | "NamespaceUseClauseList" | "NamespaceUseDeclaration" | "NamespaceUseGroupClause" | "NamespaceUseGroupClauseList" | "NullStatement" | "ObjectCreationExpression" | "ParameterDeclaration" | "ParameterDeclarationList" | "PostfixDecrementExpression" | "PostfixIncrementExpression" | "PrefixDecrementExpression" | "PrefixIncrementExpression" | "PrintIntrinsic" | "PropertyAccessExpression" | "PropertyDeclaration" | "PropertyElement" | "PropertyElementList" | "PropertyInitialiser" | "QualifiedName" | "QualifiedNameList" | "RelationalExpression" | "RelativeQualifiedName" | "RelativeScope" | "RequireExpression" | "RequireOnceExpression" | "ReturnStatement" | "ReturnType" | "ScopedCallExpression" | "ScopedMemberName" | "ScopedPropertyAccessExpression" | "ShellCommandExpression" | "ShiftExpression" | "SimpleAssignmentExpression" | "SimpleVariable" | "StatementList" | "StaticVariableDeclaration" | "StaticVariableDeclarationList" | "SubscriptExpression" | "SwitchStatement" | "ThrowStatement" | "TraitAdaptationList" | "TraitAlias" | "TraitDeclaration" | "TraitDeclarationBody" | "TraitDeclarationHeader" | "TraitMemberDeclarationList" | "TraitPrecedence" | "TraitUseClause" | "TraitUseSpecification" | "TryStatement" | "TypeDeclaration" | "UnaryOpExpression" | "UnsetIntrinsic" | "VariableList" | "VariableNameList" | "VariadicUnpacking" | "WhileStatement" | "YieldExpression" | "YieldFromExpression";
