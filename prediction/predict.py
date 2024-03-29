import pandas as pd
from sklearn.neighbors import KNeighborsClassifier

df = pd.read_csv('data/dataset.csv')
df1 = pd.read_csv('data/symptom_severity.csv')
df2 = pd.read_csv('data/disease_description.csv')
df3 = pd.read_csv('data/disease_precaution.csv')
df4 = pd.read_csv('data/Training.csv')
df5 = pd.read_csv('data/Testing.csv')

X_train_data = df4.drop("prognosis",axis=1)
y_train_data = df4["prognosis"].copy()
X_test = df5.drop("prognosis",axis=1)
y_test = df5["prognosis"].copy()

knn = KNeighborsClassifier(n_neighbors = 5).fit(X_train_data, y_train_data)
knn_predictions = knn.predict(X_test.head(1))

print(knn_predictions)