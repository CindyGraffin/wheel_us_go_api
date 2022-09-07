export interface Dto {
    // trick utilisé pour pouvoir obligé le type ResponseWithDto à n'accepter que des interfaces 'Dto'. Si l'interface est vide l'interpreteur ne la considère pas.
    trick?: string;
}