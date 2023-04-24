interface ICodeExpiresIn {
    expiresMin: number
};

interface IResCodeExpiresIn {
    codeExpiresIn: Date,
    code: string
};

export { 
    ICodeExpiresIn,
    IResCodeExpiresIn
}