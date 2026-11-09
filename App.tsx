import { View, Text, StyleSheet } from 'react-native';

const produits = [
  { id: 1, nom: 'Clavier', prix: 120, stock: 5 },
  { id: 2, nom: 'Souris', prix: 80, stock: 8 },
  { id: 3, nom: 'Écran', prix: 900, stock: 0 },
  { id: 4, nom: 'Casque', prix: 240, stock: 3 }
];

export default function CatalogueApp() {
  const disponibles = produits.filter(p => p.stock > 0);
  const valeurTotal = produits.reduce((sum, p) => sum + (p.prix * p.stock), 0);

  return (
    <View style={styles.container}>
      <Text style={styles.titre}>CampusStock - Catalogue</Text>
      <Text style={styles.info}>Produits disponibles : {disponibles.length}</Text>
      <Text style={styles.info}>Valeur du stock : {valeurTotal} MAD</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F4F6F9' },
  titre: { fontSize: 22, fontWeight: 'bold', color: '#1A2E40', marginBottom: 12 },
  info: { fontSize: 16, color: '#334E68', marginBottom: 6 }
});