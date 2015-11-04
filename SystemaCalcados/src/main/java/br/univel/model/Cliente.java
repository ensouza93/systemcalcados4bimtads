package br.univel.model;

import javax.persistence.Entity;
import java.io.Serializable;
import javax.persistence.Table;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Column;
import javax.persistence.Version;
import java.lang.Override;
import javax.xml.bind.annotation.XmlRootElement;

@Entity
@Table(name = "cliente")
@XmlRootElement
public class Cliente implements Serializable
{

   @Id
   @GeneratedValue(strategy = GenerationType.AUTO)
   @Column(name = "id", updatable = false, nullable = false)
   private Long id;
   @Version
   @Column(name = "version")
   private int version;

   private String Nome;

   private String Sobrenome;

   private String endereco;

   private String CPF;

   private String Cidade;

   public Long getId()
   {
      return this.id;
   }

   public void setId(final Long id)
   {
      this.id = id;
   }

   public int getVersion()
   {
      return this.version;
   }

   public void setVersion(final int version)
   {
      this.version = version;
   }

   @Override
   public boolean equals(Object obj)
   {
      if (this == obj)
      {
         return true;
      }
      if (!(obj instanceof Cliente))
      {
         return false;
      }
      Cliente other = (Cliente) obj;
      if (id != null)
      {
         if (!id.equals(other.id))
         {
            return false;
         }
      }
      return true;
   }

   @Override
   public int hashCode()
   {
      final int prime = 31;
      int result = 1;
      result = prime * result + ((id == null) ? 0 : id.hashCode());
      return result;
   }

   public String getNome()
   {
      return Nome;
   }

   public void setNome(String Nome)
   {
      this.Nome = Nome;
   }

   public String getSobrenome()
   {
      return Sobrenome;
   }

   public void setSobrenome(String Sobrenome)
   {
      this.Sobrenome = Sobrenome;
   }

   public String getEndereco()
   {
      return endereco;
   }

   public void setEndereco(String endereco)
   {
      this.endereco = endereco;
   }

   public String getCPF()
   {
      return CPF;
   }

   public void setCPF(String CPF)
   {
      this.CPF = CPF;
   }

   public String getCidade()
   {
      return Cidade;
   }

   public void setCidade(String Cidade)
   {
      this.Cidade = Cidade;
   }

   @Override
   public String toString()
   {
      String result = getClass().getSimpleName() + " ";
      if (id != null)
         result += "id: " + id;
      result += ", version: " + version;
      if (Nome != null && !Nome.trim().isEmpty())
         result += ", Nome: " + Nome;
      if (Sobrenome != null && !Sobrenome.trim().isEmpty())
         result += ", Sobrenome: " + Sobrenome;
      if (endereco != null && !endereco.trim().isEmpty())
         result += ", endereco: " + endereco;
      if (CPF != null && !CPF.trim().isEmpty())
         result += ", CPF: " + CPF;
      if (Cidade != null && !Cidade.trim().isEmpty())
         result += ", Cidade: " + Cidade;
      return result;
   }
}